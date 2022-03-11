CREATE DATABASE IF NOT EXISTS db;

USE db;

CREATE TABLE IF NOT EXISTS Employess (
  employee_id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  age VARCHAR(45) NOT NULL,
  PRIMARY KEY (usuario_id)
);

CREATE TABLE IF NOT EXISTS Addresses (
  address_id INT NOT NULL AUTO_INCREMENT,
  city VARCHAR(50) NOT NULL,
  street VARCHAR(50) NOT NULL
  number INT NOT NULL,
  employees INT NOT NULL,
  FOREIGN KEY (employess) REFERENCES Employess(employee_id),
);
