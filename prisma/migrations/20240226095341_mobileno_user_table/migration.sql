/*
  Warnings:

  - You are about to drop the column `mobile` on the `Customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mobileNo]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mobileNo` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Customer_mobile_key";

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "mobile",
ADD COLUMN     "mobileNo" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_mobileNo_key" ON "Customer"("mobileNo");
