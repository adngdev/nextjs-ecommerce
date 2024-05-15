-- DropForeignKey
ALTER TABLE "Brand" DROP CONSTRAINT "Brand_brand_id_fkey";

-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_category_id_fkey";

-- DropIndex
DROP INDEX "Product_brand_id_key";

-- DropIndex
DROP INDEX "Product_category_id_key";

-- CreateTable
CREATE TABLE "CategoryClosure" (
    "closure_id" TEXT NOT NULL,
    "ancestor_id" TEXT NOT NULL,
    "descendant_id" TEXT NOT NULL,
    "depth" INTEGER NOT NULL,

    CONSTRAINT "CategoryClosure_pkey" PRIMARY KEY ("closure_id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand"("brand_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryClosure" ADD CONSTRAINT "CategoryClosure_ancestor_id_fkey" FOREIGN KEY ("ancestor_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryClosure" ADD CONSTRAINT "CategoryClosure_descendant_id_fkey" FOREIGN KEY ("descendant_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
