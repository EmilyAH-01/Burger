DROP DATABASE IF EXISTS cravings_db;
CREATE DATABASE cravings_db;

USE cravings_db;

CREATE TABLE cravings (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    food_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false
);
