CREATE TABLE
    Club (
        cID INT PRIMARY KEY,
        email VARCHAR(256) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        name varchar(30) UNIQUE NOT NULL,
        description TEXT,
        instagram varchar(30),
        discord varchar(10)
    );

CREATE TABLE
    Event (
        eID INT PRIMARY KEY,
        cID INT REFERENCES Club (cID),
        description TEXT,
        start_time TIMESTAMP,
        end_time TIMESTAMP,
        posted_time TIMESTAMP NOT NULL,
        title varchar(30) NOT NULL,
        location varchar(30),
        CONSTRAINT chk_start_end CHECK (end_time > start_time)
    );

CREATE TABLE
    Category (type varchar(30) PRIMARY KEY);

CREATE TABLE
    ClubCategory (
        cID INT REFERENCES Club (cID),
        type varchar(30) REFERENCES Category (type),
        PRIMARY KEY (cID, type)
    );

CREATE TABLE
    RSVP (
        email: varchar(256) PRIMARY KEY,
        eID INT REFERENCES Event (eID),
        created-at: TIMESTAMP NOT NULL
    );



