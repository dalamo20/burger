DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(30) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);
