CREATE DATABASE atividade1;
USE atividade1;


DROP DATABASE atividade1; 
/*
--------------------------------------------------------------------
atividade 03
CREATE TABLE clientes(
email varchar (255) unique
);

INSERT INTO clientes VALUE ("caioluax@gmail.com");
INSERT INTO clientes VALUE ("caiolua@gmail.com");

-------------------------------------------------------------------
ativadade 02
CREATE TABLE produtos(
id_produto int,
nome_produto varchar(255),
preco int,
CHECK (preco > 0));

INSERT INTO produtos VALUE (0001, "teclado", 44);
INSERT INTO produtos VALUE(0002, "nada", 4);


-------------------------------------------------------------------
atividade 01
CREATE TABLE clientes(
id_cliente int primary key,
nome_cliente varchar(50),
idade int);

CREATE TABLE pedidos(
	id_pedidos int,
    id_cliente int, 
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente));
    

    
INSERT INTO clientes VALUE (123456, "caio", 17);
INSERT INTO pedidos VALUE (000001, 123456); 
/*