-- Enable btree_gist extension for exclusion constraint
CREATE EXTENSION IF NOT EXISTS btree_gist;

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "DocType" AS ENUM ('DNI', 'PASSPORT', 'CI', 'OTHER');

-- CreateEnum
CREATE TYPE "ReservationStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'FINISHED');

-- CreateEnum
CREATE TYPE "ReservationOrigin" AS ENUM ('WEB_DIRECT', 'ADMIN_MANUAL', 'ICAL_EXTERNAL');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('ARS', 'USD');

-- CreateEnum
CREATE TYPE "OccupancyType" AS ENUM ('RESERVATION', 'MANUAL_BLOCK', 'ICAL_BLOCK', 'SOFT_LOCK');

-- CreateEnum
CREATE TYPE "OccupancyStatus" AS ENUM ('ACTIVE', 'RELEASED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('TRANSFER_ARS', 'TRANSFER_USD', 'CASH_ARS', 'CASH_USD', 'MERCADO_PAGO', 'OTHER');

-- CreateEnum
CREATE TYPE "AnonymizationStatus" AS ENUM ('PENDING', 'COMPLETED', 'EXPIRED');

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "capacity_adults" INTEGER NOT NULL,
    "capacity_children" INTEGER NOT NULL DEFAULT 0,
    "max_occupancy" INTEGER NOT NULL,
    "base_price_ars" DECIMAL(12,2) NOT NULL,
    "base_price_usd" DECIMAL(12,2) NOT NULL,
    "images" JSONB NOT NULL DEFAULT '[]',
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "display_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ical_feed_url" TEXT,
    "ical_export_token" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Season" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "min_stay_nights" INTEGER NOT NULL DEFAULT 1,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeasonPrice" (
    "id" TEXT NOT NULL,
    "season_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "price_ars" DECIMAL(12,2) NOT NULL,
    "price_usd" DECIMAL(12,2) NOT NULL,

    CONSTRAINT "SeasonPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscountRule" (
    "id" TEXT NOT NULL,
    "min_nights" INTEGER NOT NULL,
    "discount_percent" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "DiscountRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL,
    "doc_type" "DocType" NOT NULL,
    "doc_number" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birth_date" DATE,
    "is_anonymized" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "unit_id" TEXT,
    "guest_id" TEXT NOT NULL,
    "check_in" DATE NOT NULL,
    "check_out" DATE NOT NULL,
    "adults" INTEGER NOT NULL,
    "children" INTEGER NOT NULL DEFAULT 0,
    "currency" "Currency" NOT NULL,
    "subtotal" DECIMAL(12,2) NOT NULL,
    "discount_amount" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "total_price" DECIMAL(12,2) NOT NULL,
    "status" "ReservationStatus" NOT NULL DEFAULT 'PENDING',
    "origin" "ReservationOrigin" NOT NULL DEFAULT 'WEB_DIRECT',
    "cancellation_reason" TEXT,
    "notes" TEXT,
    "payment_method_sent_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Companion" (
    "id" TEXT NOT NULL,
    "reservation_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "doc_type" "DocType",
    "doc_number" TEXT,
    "birth_date" DATE,

    CONSTRAINT "Companion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitOccupancy" (
    "id" TEXT NOT NULL,
    "unit_id" TEXT NOT NULL,
    "reservation_id" TEXT,
    "type" "OccupancyType" NOT NULL,
    "check_in" DATE NOT NULL,
    "check_out" DATE NOT NULL,
    "lock_token" TEXT,
    "expires_at" TIMESTAMP(3),
    "status" "OccupancyStatus" NOT NULL DEFAULT 'ACTIVE',
    "notes" TEXT,

    CONSTRAINT "UnitOccupancy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "reservation_id" TEXT NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "currency" "Currency" NOT NULL,
    "payment_method" "PaymentMethod" NOT NULL,
    "notes" TEXT,
    "receipt_path" TEXT,
    "receipt_filename" TEXT,
    "receipt_mime" TEXT,
    "receipt_size" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnonymizationRequest" (
    "id" TEXT NOT NULL,
    "guest_id" TEXT NOT NULL,
    "requested_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deadline_at" TIMESTAMP(3) NOT NULL,
    "completed_at" TIMESTAMP(3),
    "status" "AnonymizationStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "AnonymizationRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemSetting" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "SystemSetting_pkey" PRIMARY KEY ("key")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Unit_ical_export_token_key" ON "Unit"("ical_export_token");

-- CreateIndex
CREATE UNIQUE INDEX "SeasonPrice_season_id_category_id_key" ON "SeasonPrice"("season_id", "category_id");

-- CreateIndex
CREATE UNIQUE INDEX "Guest_doc_type_doc_number_key" ON "Guest"("doc_type", "doc_number");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_code_key" ON "Reservation"("code");

-- CreateIndex
CREATE INDEX "UnitOccupancy_unit_id_check_in_check_out_idx" ON "UnitOccupancy"("unit_id", "check_in", "check_out");

-- CreateIndex
CREATE INDEX "UnitOccupancy_lock_token_idx" ON "UnitOccupancy"("lock_token");

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeasonPrice" ADD CONSTRAINT "SeasonPrice_season_id_fkey" FOREIGN KEY ("season_id") REFERENCES "Season"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeasonPrice" ADD CONSTRAINT "SeasonPrice_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_guest_id_fkey" FOREIGN KEY ("guest_id") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Companion" ADD CONSTRAINT "Companion_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitOccupancy" ADD CONSTRAINT "UnitOccupancy_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitOccupancy" ADD CONSTRAINT "UnitOccupancy_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnonymizationRequest" ADD CONSTRAINT "AnonymizationRequest_guest_id_fkey" FOREIGN KEY ("guest_id") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Exclusion Constraint for Zero Overbooking (RNF-03, AC-41)
ALTER TABLE "UnitOccupancy" ADD CONSTRAINT "exclude_unit_occupancy_overlap"
EXCLUDE USING gist (
  unit_id WITH =,
  daterange(check_in, check_out, '[)') WITH &&
) WHERE (status = 'ACTIVE');
