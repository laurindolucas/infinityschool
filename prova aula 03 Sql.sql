CREATE DATABASE infinitySqlIII;
USE infinitySqlIII;

CREATE TABLE produtos (
produtoID INT PRIMARY KEY AUTO_INCREMENT,
nomeProduto VARCHAR(50),
preco DECIMAL(10,2)
);

CREATE TABLE fornecedores(
fornecedorID INT PRIMARY KEY AUTO_INCREMENT,
nomeFornecedor VARCHAR(50),
contato VARCHAR(50)
);

CREATE TABLE estoque(
estoqueID INT PRIMARY KEY AUTO_INCREMENT,
produtoID INT,
fornecedorID INT,
quantidade INT,
dataEntrada TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (produtoID) REFERENCES produtos(produtoID),
FOREIGN KEY (fornecedorID) REFERENCES fornecedores(fornecedorID)
);

-- Inserindo dados na tabela Produtos
INSERT INTO produtos (nomeProduto, preco) VALUES ('arroz', 10.00);
INSERT INTO produtos (nomeProduto, preco) VALUES ('feijão', 09.50);

-- Inserindo dados na tabela Fornecedores
INSERT INTO fornecedores (nomeFornecedor, contato) VALUES ('Três corações', 'contato@trescoracoes.com');
INSERT INTO fornecedores (nomeFornecedor, contato) VALUES ('kicaldo', 'contato@kikaldo.com');

-- Inserindo dados na tabela Estoque
INSERT INTO estoque (produtoID, fornecedorID, quantidade) VALUES (1, 1, 100);
INSERT INTO estoque (produtoID, fornecedorID, quantidade) VALUES (2, 2, 200);

SELECT produtoID, SUM(quantidade) AS TotalQuantidade 
FROM estoque 
GROUP BY produtoID;