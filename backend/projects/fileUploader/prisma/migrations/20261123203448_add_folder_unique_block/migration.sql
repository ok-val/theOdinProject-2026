/*
  Warnings:

  - A unique constraint covering the columns `[ownerId,path]` on the table `Folder` will be added. If there are existing duplicate values, this will fail.
  - Made the column `path` on table `Folder` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Folder" ALTER COLUMN "path" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Folder_ownerId_path_key" ON "Folder"("ownerId", "path");
