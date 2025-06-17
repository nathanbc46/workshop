/*
  Warnings:

  - A unique constraint covering the columns `[successorId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "successorId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "User_successorId_key" ON "User"("successorId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_successorId_fkey" FOREIGN KEY ("successorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
