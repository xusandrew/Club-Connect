SELECT Club.description, Club.instagra, Club.discord, Event.title, Event.description, Event.location, Event.start-time, Event.end-time, Event.posted-time
FROM Club JOIN Event ON Club.cID = Event.cID
WHERE Club.cID = 111;

