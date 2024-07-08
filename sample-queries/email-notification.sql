SELECT
    r.email,
    e.description
FROM
    "RSVP" r
    JOIN "Event" e ON r.eID = e.eID
WHERE
    e.eID = 4;