SELECT
  e1.eID,
  e1.title,
  e1.description,
  e1.start_time,
  e1.end_time,
  e1.location
FROM
  "Event" e1
WHERE
  EXISTS (
    SELECT
      *
    FROM
      "Event" e2
    WHERE
      e2.eID = 4
      AND e1.eID != e2.eID
      AND e1.start_time < e2.end_time
      AND e1.end_time > e2.start_time
  );