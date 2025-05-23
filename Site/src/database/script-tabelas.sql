CREATE DATABASE Pong;
USE Pong;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	empunhadura VARCHAR (15),
	constraint ck_empunhadura check(empunhadura in("Caneta","Clássico","Classineta"))
);


CREATE TABLE quiz (
	id INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
	erradas INT,
    tempo DATETIME,
    fkusuario int,
    FOREIGN KEY (fkusuario) REFERENCES usuario(id)
);

