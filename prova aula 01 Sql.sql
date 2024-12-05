CREATE DATABASE infinity;
use infinity;

CREATE TABLE clientes(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(40),
idade INT,
cidade VARCHAR(40)
);

DROP TABLE clientes;