CREATE INDEX indx_club_cid ON "Club"("cid");

SELECT
    "Club".description,
    "Club".instagram,
    "Club".discord,
FROM
    "Club"
WHERE
    "Club".cid = 2;