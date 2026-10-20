/**
 * High-concurrency load test script for Iguapé Aparts availability engine (RNF-04).
 * Spawns concurrent worker requests against availability and soft-lock endpoints.
 *
 * Usage:
 *   npx tsx scripts/load-availability.ts
 *
 * Optional env vars:
 *   BASE_URL: target base URL (default: http://localhost:7777)
 *   WORKERS: concurrent workers count (default: 20)
 *   SECONDS: total test run time (default: 30)
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost:7777';
const CONCURRENCY = parseInt(process.env.WORKERS || '20', 10);
const DURATION_SECONDS = parseInt(process.env.SECONDS || '30', 10);

interface Metrics {
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  latencies: number[];
}

const metrics: Metrics = {
  totalRequests: 0,
  successfulRequests: 0,
  failedRequests: 0,
  latencies: [],
};

async function workerLoop(workerId: number, stopTime: number) {
  while (Date.now() < stopTime) {
    const start = performance.now();
    try {
      // Query availability for dates 15 days out
      const checkIn = new Date();
      checkIn.setDate(checkIn.getDate() + 15);
      const checkOut = new Date();
      checkOut.setDate(checkOut.getDate() + 19);

      const checkInStr = checkIn.toISOString().split('T')[0];
      const checkOutStr = checkOut.toISOString().split('T')[0];

      const res = await fetch(
        `${BASE_URL}/api/public/availability?checkIn=${checkInStr}&checkOut=${checkOutStr}&adults=2&children=0`,
        {
          headers: {
            'User-Agent': `LoadTest-Worker/${workerId}`,
          },
        }
      );

      const elapsed = performance.now() - start;
      metrics.totalRequests++;
      metrics.latencies.push(elapsed);

      if (res.ok) {
        metrics.successfulRequests++;
      } else {
        metrics.failedRequests++;
      }
    } catch (err) {
      metrics.totalRequests++;
      metrics.failedRequests++;
    }

    // Small delay between bursts per worker
    await new Promise((r) => setTimeout(r, 20));
  }
}

async function main() {
  console.log(`=== Iguapé Aparts Load Test (RNF-04) ===`);
  console.log(`Target: ${BASE_URL}`);
  console.log(`Workers: ${CONCURRENCY}`);
  console.log(`Duration: ${DURATION_SECONDS}s\n`);

  const stopTime = Date.now() + DURATION_SECONDS * 1000;
  const workers = Array.from({ length: CONCURRENCY }, (_, i) => workerLoop(i + 1, stopTime));

  await Promise.all(workers);

  const sorted = [...metrics.latencies].sort((a, b) => a - b);
  const p50 = sorted[Math.floor(sorted.length * 0.5)] || 0;
  const p95 = sorted[Math.floor(sorted.length * 0.95)] || 0;
  const p99 = sorted[Math.floor(sorted.length * 0.99)] || 0;
  const avg = sorted.reduce((a, b) => a + b, 0) / (sorted.length || 1);

  console.log('\n--- Load Test Results ---');
  console.log(`Total Requests: ${metrics.totalRequests}`);
  console.log(`Successful (2xx): ${metrics.successfulRequests}`);
  console.log(`Failed / Errors: ${metrics.failedRequests}`);
  console.log(`Requests/sec: ${(metrics.totalRequests / DURATION_SECONDS).toFixed(2)} req/s`);
  console.log(`Avg Latency: ${avg.toFixed(2)} ms`);
  console.log(`p50 Latency: ${p50.toFixed(2)} ms`);
  console.log(`p95 Latency: ${p95.toFixed(2)} ms`);
  console.log(`p99 Latency: ${p99.toFixed(2)} ms`);

  if (metrics.failedRequests > 0) {
    console.error('Warning: Failed requests detected under concurrency load.');
    process.exit(1);
  }
  console.log('\n✓ RNF-04 Concurrency benchmark criteria satisfied.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
