SELECT
    c.name,
    AVG(rsvp_counts.rsvp_count) AS avg_rsvp
FROM
    "Club" c
    JOIN (
        SELECT
            e.cID,
            COUNT(r.email) AS rsvp_count
        FROM
            "Event" e
            LEFT JOIN "RSVP" r ON e.eID = r.eID
        GROUP BY
            e.cID,
            e.eID
    ) rsvp_counts ON c.cID = rsvp_counts.cID
GROUP BY
    c.cID
ORDER BY
    avg_rsvp DESC;