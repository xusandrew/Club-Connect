SELECT
    *
FROM
    "Event";

UPDATE "Event"
SET
    description = 'BINGO CANCELLED',
    location = 'SLC',
    start_time = '2024-06-30 18:00:00',
    end_time = '2024-06-30 20:00:00',
    posted_time = '2024-06-20 18:00:00'
WHERE
    eid = 1;

SELECT
    *
FROM
    "Event";

-- Output
--      title      |               description               |   location   |     start_time      |      end_time       |       posted_time       | eid | cid 
-- ----------------+-----------------------------------------+--------------+---------------------+---------------------+-------------------------+-----+-----
--  Tech Talk      | An event to discuss the latest in tech. | Room 101     | 2024-07-01 10:00:00 | 2024-07-01 12:00:00 | 2024-06-20 16:12:00.022 |   1 |   1
--  Art Exhibition | An exhibition of student artwork.       | Art Gallery  | 2024-07-02 10:00:00 | 2024-07-02 12:00:00 | 2024-06-20 16:12:00.022 |   2 |   2
--  Football Match | A friendly football match.              | Sports Field | 2024-07-03 10:00:00 | 2024-07-03 12:00:00 | 2024-06-20 16:12:00.022 |   3 |   3
--  Music Concert  | A concert featuring local bands.        | Auditorium   | 2024-07-04 10:00:00 | 2024-07-04 12:00:00 | 2024-06-20 16:12:00.022 |   4 |   4
-- (4 rows)
-- UPDATE 1
--      title      |            description            |   location   |     start_time      |      end_time       |       posted_time       | eid | cid 
-- ----------------+-----------------------------------+--------------+---------------------+---------------------+-------------------------+-----+-----
--  Art Exhibition | An exhibition of student artwork. | Art Gallery  | 2024-07-02 10:00:00 | 2024-07-02 12:00:00 | 2024-06-20 16:12:00.022 |   2 |   2
--  Football Match | A friendly football match.        | Sports Field | 2024-07-03 10:00:00 | 2024-07-03 12:00:00 | 2024-06-20 16:12:00.022 |   3 |   3
--  Music Concert  | A concert featuring local bands.  | Auditorium   | 2024-07-04 10:00:00 | 2024-07-04 12:00:00 | 2024-06-20 16:12:00.022 |   4 |   4
--  Tech Talk      | BINGO CANCELLED                   | SLC          | 2024-06-30 18:00:00 | 2024-06-30 20:00:00 | 2024-06-20 18:00:00     |   1 |   1