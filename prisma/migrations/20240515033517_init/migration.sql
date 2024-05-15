/*
  Warnings:

  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "CategoryClosure" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT;

-- CreateTable
CREATE TABLE "ProductRef" (
    "product_id" TEXT NOT NULL,
    "shopify_bm_id" TEXT,
    "shopify_am_id" TEXT,
    "luffy_id" TEXT,
    "dear_id" TEXT,

    CONSTRAINT "ProductRef_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "Variant" (
    "variant_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "colour" TEXT NOT NULL,
    "box_width" DECIMAL(65,30),
    "box_height" DECIMAL(65,30),
    "box_depth" DECIMAL(65,30),
    "product_width" DECIMAL(65,30),
    "product_height" DECIMAL(65,30),
    "product_depth" DECIMAL(65,30),
    "product_weight" DECIMAL(65,30),
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Variant_pkey" PRIMARY KEY ("variant_id")
);

-- CreateTable
CREATE TABLE "VariantRef" (
    "variant_id" TEXT NOT NULL,
    "shopify_bm_id" TEXT,
    "shopify_am_id" TEXT,

    CONSTRAINT "VariantRef_pkey" PRIMARY KEY ("variant_id")
);

-- CreateTable
CREATE TABLE "VariantPricing" (
    "variant_id" TEXT NOT NULL,
    "retail_price" DECIMAL(65,30),
    "sell_price" DECIMAL(65,30),

    CONSTRAINT "VariantPricing_pkey" PRIMARY KEY ("variant_id")
);

-- CreateTable
CREATE TABLE "Image" (
    "image_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("image_id")
);

-- AddForeignKey
ALTER TABLE "ProductRef" ADD CONSTRAINT "ProductRef_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantRef" ADD CONSTRAINT "VariantRef_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "Variant"("variant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantPricing" ADD CONSTRAINT "VariantPricing_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "Variant"("variant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
