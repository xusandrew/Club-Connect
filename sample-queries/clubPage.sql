SELECT
    "Club".description,
    "Club".instagram,
    "Club".discord,
    "Event".title,
    "Event".description,
    "Event".location,
    "Event".start_time,
    "Event".end_time,
    "Event".posted_time
FROM
    "Club"
    JOIN "Event" ON "Club".cid = "Event".cid
WHERE
    "Club".cid = 2;

-- Output
--       description       | instagram | discord |     title      |            description            |  location   |     start_time      |      end_time       |       posted_time       
-- ------------------------+-----------+---------+----------------+-----------------------------------+-------------+---------------------+---------------------+-------------------------
--  A club for art lovers. |           |         | Art Exhibition | An exhibition of student artwork. | Art Gallery | 2024-07-02 10:00:00 | 2024-07-02 12:00:00 | 2024-06-20 15:29:33.368
-- (1 row)