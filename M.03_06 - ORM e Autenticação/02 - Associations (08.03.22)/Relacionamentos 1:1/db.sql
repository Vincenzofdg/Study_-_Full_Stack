CREATE DATABASE IF NOT EXISTS db;

USE db;

CREATE TABLE IF NOT EXISTS Employees (
  employee_id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  age VARCHAR(45) NOT NULL,
  PRIMARY KEY (employee_id)
);

CREATE TABLE IF NOT EXISTS Addresses (
  address_id INT NOT NULL AUTO_INCREMENT,
  city VARCHAR(50) NOT NULL,
  street VARCHAR(50) NOT NULL,
  number INT NOT NULL,
  PRIMARY KEY (address_id),
  employees INT NOT NULL,
  FOREIGN KEY (employees) REFERENCES Employees(employee_id)
);
