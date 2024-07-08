CREATE INDEX idx_rsvp_eID ON "RSVP" (eID);
CREATE INDEX idx_event_eID ON "Event" (eID);

SELECT
    r.email,
    e.description
FROM
    "RSVP" r
    JOIN "Event" e ON r.eID = e.eID
WHERE
    e.eID = 4;

