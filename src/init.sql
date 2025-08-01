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
  "address" TEXT,
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
COMMENT ON COLUMN "Laundromat"."address" IS 'Content of the laundry';

-- Create indexes for better performance
CREATE INDEX idx_laundry_owner ON "Laundry" ("owner_id");
CREATE INDEX idx_laundry_admin ON "Laundry" ("admin_id");
CREATE INDEX idx_Laundromat_user ON "Laundromat" ("user_id");
CREATE INDEX idx_user_role ON "User" ("role_id");