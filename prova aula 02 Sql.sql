CREATE DATABASE infinitySqlII;
USE infinitySqlII;

CREATE TABLE produtos(
	produtoID INT PRIMARY KEY AUTO_INCREMENT,
    nomeProduto VARCHAR (40),
    quantidade INT,
    preço DECIMAL(10,2)
);

INSERT INTO produtos (nomeProduto, quantidade, preço) VALUES ("maça", 23, 1);
INSERT INTO produtos (nomeProduto, quantidade, preço) VALUES ("pera", 47, 4);
INSERT INTO produtos (nomeProduto, quantidade, preço) VALUES ("manga", 28, 3);