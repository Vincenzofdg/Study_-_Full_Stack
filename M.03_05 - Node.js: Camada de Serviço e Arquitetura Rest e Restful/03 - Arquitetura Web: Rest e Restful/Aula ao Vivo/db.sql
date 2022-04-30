CREATE DATABASE IF NOT EXISTS db;

USE db;

CREATE TABLE IF NOT EXISTS people (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  age INT NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO people (name, age)

VALUES
  ('Beatriz', 26),
  ('Vincenzo', 26),
  ('Pedro W.', 28),
  ('Carlinhos', 18),
  ('Pedro C.', 23);