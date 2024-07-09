-- CreateTable
CREATE TABLE
    "RSVP" (
        "eid" INTEGER NOT NULL,
        "email" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "RSVP_pkey" PRIMARY KEY ("eid", "email")
    );

-- AddForeignKey
ALTER TABLE "RSVP" ADD CONSTRAINT "RSVP_eid_fkey" FOREIGN KEY ("eid") REFERENCES "Event" ("eid") ON DELETE RESTRICT ON UPDATE CASCADE;