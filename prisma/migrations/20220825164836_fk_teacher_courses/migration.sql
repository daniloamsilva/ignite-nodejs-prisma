/*
  Warnings:

  - A unique constraint covering the columns `[fk_id_teacher]` on the table `courses` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "fk_id_teacher" TEXT;

-- CreateTable
CREATE TABLE "Teachers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Teachers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_name_key" ON "Teachers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "courses_fk_id_teacher_key" ON "courses"("fk_id_teacher");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_id_teacher_fkey" FOREIGN KEY ("fk_id_teacher") REFERENCES "Teachers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
