CREATE DATABASE Pong;
USE Pong;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	empunhadura VARCHAR (15),
	CONSTRAINT ck_empunhadura check(empunhadura in("Caneta","Clássico","Classineta"))
);


CREATE TABLE quiz (
	id INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
	erradas INT,
    tempo DATETIME,
    fkusuario int,
    FOREIGN KEY (fkusuario) REFERENCES usuario(id)
);


CREATE TABLE jogadores (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(30),
	ranking INT,
	pais VARCHAR(30),
	pontos INT,
	votacao INT,
	CONSTRAINT ck_pais check(pais in ("Brasil","China","França","Suécia","Japão"))

);





INSERT INTO jogadores (nome,ranking,pais,pontos,votacao)
	values('Sun Yingsha',1,'China',11900,0),
		  ('Chen Meng',0,'China',8800,0),
		  ('Wang Manyu',2,'China',7200,0),
		  ('Mima Ito',7,'Japão',3050,0),
		  ('Miwa Harimoto',6,'Japão',3500,0),
		  ('Bruna Takahashi',16,'Brasil',1420,0),
		  ('Giulia Takahashi',76,'Brasil',326,0),
		  ('Wang Chunqin',2,'China',6925,0),
		  ('Ma Long',0,'China',3750,0),
		  ('Fan Zhendong',0,'China',5348,0),
		  ('Hugo Calderano',3,'Brasil',5575,0),
		  ('Alexis Lebrun',9,'França',2230,0),
		  ('Felix Lebrun',7,'França',3320,0),
		  ('Truls Moregard',6,'Suécia',3680,0),
		  ('Tomokazu Harimoto',4,'Japão',4550,0);
