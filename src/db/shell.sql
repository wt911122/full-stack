CREATE TABLE user(
   id varchar(36) NOT NULL PRIMARY KEY,
   username varchar(50) NOT NULL UNIQUE,
   password varchar(100) NOT NULL
);
CREATE TABLE accountbook(
   id varchar(36) NOT NULL PRIMARY KEY,
   user varchar(36) NOT NULL,
   category varchar(50) NOT NULL,
   content varchar(100) NOT NULL,
   cost FLOAT NOT NULL,
   moodgrade FLOAT NOT NULL DEFAULT (0)
);