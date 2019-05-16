CREATE DATABASE burgers_db;

USE burgers_db;
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers
(
    id INT
    AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR
    (45) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY
    (id)
)