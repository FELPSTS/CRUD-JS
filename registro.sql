create database registro;
use registro;

create table usuario(
id			int null auto_increment,
email 		varchar(100),
usuario 	varchar(50),
senha 		varchar(30), 

primary key(id)
);

select * from usuario;

INSERT into usuario values
(default,'test.gmail.com','zé','123789');

drop database registro;
drop table usuario;