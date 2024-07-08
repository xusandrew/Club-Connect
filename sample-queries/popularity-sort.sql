SELECT
    e.eID,
    e.title,
    e.description,
    e.start_time,
    e.end_time,
    COUNT(r.email) AS rsvp_count
FROM
    "Event" e
    LEFT JOIN "RSVP" r ON e.eID = r.eID
GROUP BY
    e.eID
ORDER BY
    rsvp_count DESC;