-- CREATE TABLE "Role" (
--   "id" SERIAL PRIMARY KEY,
--   "name" VARCHAR(255) NOT NULL,
--   "status" VARCHAR(50) NOT NULL,
--   "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE "User" (
--   "id" SERIAL PRIMARY KEY,
--   "username" VARCHAR(255) NOT NULL,
--   "role_id" INTEGER NOT NULL,
--   "phone" INTEGER NOT NULL,
--   "address" TEXT NOT NULL,
--   "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY ("role_id") REFERENCES "Role"("id")
-- );

-- CREATE TABLE "Laundromat" (
--   "id" SERIAL PRIMARY KEY,
--   "title" VARCHAR(255) NOT NULL,
--   "body" TEXT NOT NULL,
--   "user_id" INTEGER NOT NULL,
--   "status" VARCHAR(50) NOT NULL,
--   "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY ("user_id") REFERENCES "User"("id")
-- );

-- CREATE TABLE "Laundry" (
--   "id" SERIAL PRIMARY KEY,
--   "owner_id" INTEGER NOT NULL,
--   "admin_id" INTEGER NOT NULL,
--   "weight" DECIMAL(10,2) NOT NULL,
--   "price" DECIMAL(10,2) NOT NULL,
--   "status" VARCHAR(50) NOT NULL,
--   "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY ("owner_id") REFERENCES "User"("id"),
--   FOREIGN KEY ("admin_id") REFERENCES "User"("id")
-- );

-- -- Add comments
-- COMMENT ON COLUMN "Laundromat"."body" IS 'Content of the laundry';

-- INSERT INTO "Role" ("name", "status") VALUES 
-- ('Admin', 'active'),
-- ('Customer', 'active'),
-- ('Staff', 'active');

-- Create the database (run this first in DBeaver)
CREATE DATABASE laundry_mvp;

-- Connect to the database and run these:
\c laundry_mvp

-- Create Role table first (referenced by User)
CREATE TABLE "Role" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255),
  "status" VARCHAR(255),
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create User table
CREATE TABLE "User" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(255),
  "role_id" INTEGER REFERENCES "Role"("id"),
  "phone" INTEGER,
  "address" TEXT,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Laundromat table
CREATE TABLE "Laundromat" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(255),
  "body" TEXT,
  "user_id" INTEGER NOT NULL REFERENCES "User"("id"),
  "status" VARCHAR(255),
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Laundry table
CREATE TABLE "Laundry" (
  "id" SERIAL PRIMARY KEY,
  "owner_id" INTEGER REFERENCES "User"("id"),
  "admin_id" INTEGER REFERENCES "User"("id"),
  "weight" DECIMAL(10,2),
  "price" DECIMAL(10,2),
  "status" VARCHAR(255),
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add comments
COMMENT ON COLUMN "Laundromat"."body" IS 'Content of the laundry';

-- Create indexes for better performance
CREATE INDEX idx_laundry_owner ON "Laundry" ("owner_id");
CREATE INDEX idx_laundry_admin ON "Laundry" ("admin_id");
CREATE INDEX idx_Laundromat_user ON "Laundromat" ("user_id");
CREATE INDEX idx_user_role ON "User" ("role_id");