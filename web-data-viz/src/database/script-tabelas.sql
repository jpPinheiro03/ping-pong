CREATE DATABASE Pong;

USE Pong;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fkEmpunhaura int
	FOREIGN KEY (fkEmpunhaura) REFERENCES empunhadura(id)
);

create table empunhadura(
	id int PRIMARY KEY AUTO_INCREMENT,
	tipo VARCHAR (15),
	constraint ck_empunhadura check(tipo in("Caneta","Clásico","Classineta"))
);






