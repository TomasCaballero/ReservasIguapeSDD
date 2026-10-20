// Requiere: npm install sharp heic-convert ffmpeg-static
// Uso: npm run optimize:media  O  node scripts/optimize-media.cjs [directorio_opcional]

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const sharp = require('sharp');
const heicConvert = require('heic-convert');

let ffmpegPath = null;
try {
  ffmpegPath = require('ffmpeg-static');
} catch (e) {
  console.warn('ffmpeg-static no encontrado. La conversión de video no estará disponible.');
}

const targetDir = process.argv[2] ? path.resolve(process.cwd(), process.argv[2]) : path.resolve(process.cwd(), 'public/assets');

const imgExtensions = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.avif', '.heic', '.heif'];
const videoExtensions = ['.mp4', '.mov', '.avi', '.mkv', '.m4v'];

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      // Ignorar scripts .cjs/.js
      if (!['.cjs', '.js', '.ts', '.json'].includes(path.extname(file).toLowerCase())) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

function convertVideoToWebm(inputFile, outputFile) {
  return new Promise((resolve, reject) => {
    if (!ffmpegPath) {
      return reject(new Error('ffmpeg no está configurado'));
    }

    const args = [
      '-y',
      '-i', inputFile,
      '-c:v', 'libvpx-vp9',
      '-crf', '32',
      '-b:v', '0',
      '-deadline', 'good',
      '-cpu-used', '2',
      '-c:a', 'libopus',
      '-b:a', '128k',
      outputFile
    ];

    const proc = spawn(ffmpegPath, args);

    let stderrData = '';
    proc.stderr.on('data', (data) => {
      stderrData += data.toString();
    });

    proc.on('close', (code) => {
      if (code === 0 && fs.existsSync(outputFile) && fs.statSync(outputFile).size > 0) {
        resolve();
      } else {
        reject(new Error(`ffmpeg falló con código ${code}. ${stderrData.slice(-300)}`));
      }
    });

    proc.on('error', (err) => reject(err));
  });
}

async function optimizarDirectorio() {
  console.log(`\n==============================================`);
  console.log(` Iniciando optimización en: ${targetDir}`);
  console.log(`==============================================\n`);

  const allFiles = getAllFiles(targetDir);

  const imagesToProcess = allFiles.filter(f => imgExtensions.includes(path.extname(f).toLowerCase()));
  const videosToProcess = allFiles.filter(f => videoExtensions.includes(path.extname(f).toLowerCase()));

  console.log(`📸 Imágenes encontradas (no-webp): ${imagesToProcess.length}`);
  console.log(`🎬 Videos encontrados: ${videosToProcess.length}\n`);

  let imgConverted = 0;
  let imgSkipped = 0;
  let imgDeleted = 0;
  let vidConverted = 0;
  let vidSkipped = 0;
  let errors = 0;

  // 1. Procesamiento de imágenes
  console.log(`--- [1/2] PROCESANDO IMÁGENES ---`);
  for (const archivo of imagesToProcess) {
    const ext = path.extname(archivo);
    const dir = path.dirname(archivo);
    const nombreBase = path.basename(archivo, ext);
    const salidaWebp = path.join(dir, `${nombreBase}.webp`);
    const relArchivo = path.relative(targetDir, archivo);

    // Si ya existe el .webp, saltamos la conversión
    const webpExiste = fs.existsSync(salidaWebp) && fs.statSync(salidaWebp).size > 0;

    if (webpExiste) {
      console.log(`⏩ [Existe .webp] Saltando conversión: ${relArchivo}`);
      imgSkipped++;
    } else {
      try {
        const esHeic = ['.heic', '.heif'].includes(ext.toLowerCase());
        if (esHeic) {
          const inputBuffer = fs.readFileSync(archivo);
          const jpegBuffer = await heicConvert({ buffer: inputBuffer, format: 'JPEG', quality: 1 });
          await sharp(jpegBuffer).webp({ quality: 82 }).toFile(salidaWebp);
        } else {
          await sharp(archivo).webp({ quality: 82 }).toFile(salidaWebp);
        }
        console.log(`✔ [Convertido] ${relArchivo} → ${nombreBase}.webp`);
        imgConverted++;
      } catch (err) {
        console.error(`✘ [Error al convertir imagen] ${relArchivo}: ${err.message}`);
        errors++;
        continue; // No borrar original si falló
      }
    }

    // Eliminación segura de la imagen original si el .webp existe y es válido
    if (fs.existsSync(salidaWebp) && fs.statSync(salidaWebp).size > 0) {
      try {
        fs.unlinkSync(archivo);
        console.log(`  🗑 Eliminado original: ${relArchivo}`);
        imgDeleted++;
      } catch (delErr) {
        console.error(`  ✘ Error al eliminar original ${relArchivo}: ${delErr.message}`);
      }
    }
  }

  // 2. Procesamiento de videos
  console.log(`\n--- [2/2] PROCESANDO VIDEOS ---`);
  for (const video of videosToProcess) {
    const ext = path.extname(video);
    const dir = path.dirname(video);
    const nombreBase = path.basename(video, ext);
    const salidaWebm = path.join(dir, `${nombreBase}.webm`);
    const relVideo = path.relative(targetDir, video);

    // Si ya existe el .webm, saltamos la conversión
    const webmExiste = fs.existsSync(salidaWebm) && fs.statSync(salidaWebm).size > 0;

    if (webmExiste) {
      console.log(`⏩ [Existe .webm] Saltando conversión: ${relVideo}`);
      vidSkipped++;
    } else {
      try {
        console.log(`⏳ [Convirtiendo video a WebM...] ${relVideo}`);
        await convertVideoToWebm(video, salidaWebm);
        console.log(`✔ [Video convertido] ${relVideo} → ${nombreBase}.webm`);
        vidConverted++;
      } catch (err) {
        console.error(`✘ [Error al convertir video] ${relVideo}: ${err.message}`);
        errors++;
      }
    }
  }

  console.log(`\n==============================================`);
  console.log(` Resumen de Optimización:`);
  console.log(`----------------------------------------------`);
  console.log(` Imágenes convertidas a .webp : ${imgConverted}`);
  console.log(` Imágenes que ya tenían .webp : ${imgSkipped}`);
  console.log(` Imágenes originales eliminadas: ${imgDeleted}`);
  console.log(` Videos convertidos a .webm   : ${vidConverted}`);
  console.log(` Videos que ya tenían .webm   : ${vidSkipped}`);
  console.log(` Errores                      : ${errors}`);
  console.log(`==============================================\n`);
}

optimizarDirectorio().catch(console.error);
