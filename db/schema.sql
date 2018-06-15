USE nyc9al2mghyyakcg;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(30) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 0,
createdAt datetime DEFAULT current_timestamp, 
PRIMARY KEY (id)
);
