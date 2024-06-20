UPDATE Event
SET description = "BINGO CANCELLED",
    location = "SLC",
    start-time = "2024-06-30 18:00:00",
    end-time = "2024-06-30 20:00:00",
    posted-time = "2024-06-20 18:00:00"
WHERE eID = 222; 

--Just for Output purposes--
SELECT * FROM Event;