CREATE TABLE Club(
    cID INT PRIMARY KEY,
    email VARCHAR(256) UNIQUE NOT NULL,
    password string NOT NULL,
    name varchar(30) UNIQUE NOT NULL,
    description string,
    instagram varchar(30),
    discord varchar(10)
);

CREATE TABLE Event(
    eID INT PRIMARY KEY, 
    cID INT REFERENCES Club(cID),
    description string,
    start-time TIMESTAMP,
    end-time TIMESTAMP,
    posted-time TIMESTAMP NOT NULL,
    title varchar(30) NOT NULL,
    location varchar(30)
);

CREATE TABLE Categories(
    type varchar(30) PRIMARY KEY
);

CREATE TABLE ClubCategories(
    cID INT REFERENCES Club(cID),
    type varchar(30) REFERENCES Categories(type),
    PRIMARY KEY (cID, type)
);