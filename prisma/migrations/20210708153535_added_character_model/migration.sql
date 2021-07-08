/*
  Warnings:

  - A unique constraint covering the columns `[characterId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "CharacterClass" AS ENUM ('RANGER', 'WARRIOR', 'WIZARD');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "characterId" TEXT;

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "strength" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "magic" INTEGER NOT NULL,
    "stamina" INTEGER NOT NULL,
    "luck" INTEGER NOT NULL,
    "armour" INTEGER NOT NULL,
    "class" "CharacterClass" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Character.name_unique" ON "Character"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_characterId_unique" ON "User"("characterId");

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;
