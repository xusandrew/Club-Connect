CREATE INDEX idx_rsvp_eid ON "RSVP"(eID);
CREATE INDEX idx_rsvp_email ON "RSVP"(email);
CREATE INDEX idx_event_cid ON "Event"(cID);
CREATE INDEX idx_event_eid ON "Event"(eID);

SELECT DISTINCT
    r.email
FROM
    "RSVP" r
WHERE
    r.email IN (
        SELECT
            r2.email
        FROM
            "RSVP" r2
            JOIN "Event" e ON r2.eID = e.eID
        GROUP BY
            r2.email
        HAVING
            COUNT(*) = (
                SELECT
                    COUNT(*)
                FROM
                    "Event"
                WHERE
                    cID = 1
            )
    );

    