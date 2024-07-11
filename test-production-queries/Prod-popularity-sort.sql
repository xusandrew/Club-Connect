CREATE INDEX idx_rsvp_eID ON "RSVP" (eID);

CREATE INDEX idx_event_eID ON "Event" (eID);

WITH
    RSVP_counts AS (
        SELECT
            eID,
            COUNT(email) AS rsvp_count
        FROM
            "RSVP"
        GROUP BY
            eID
    )
SELECT
    e.eID,
    e.title,
    e.description,
    e.start_time,
    e.end_time,
    rc.rsvp_count AS rsvp_count
FROM
    "Event" e
    LEFT JOIN RSVP_counts rc ON e.eID = rc.eID
ORDER BY
    rsvp_count DESC
LIMIT
    20;