SELECT r.email
FROM RSVP r
WHERE r.email IN (
    SELECT r2.email
    FROM RSVP r2
    JOIN Event e ON r2.eID = e.eID
    WHERE e.cID = [specific_club_id]
    GROUP BY r2.email
    HAVING COUNT(DISTINCT e.eID) = (
        SELECT COUNT(*)
        FROM Event
        WHERE cID = [specific_club_id]
    )
);
