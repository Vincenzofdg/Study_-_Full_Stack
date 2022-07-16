drop database if exists `db`;
create database `db`;
use `db`;

create table `user` (
	`id` int not null auto_increment primary key,
  `name` varchar(100) null,
  `email` varchar(100) null,
  `password` varchar(100) null
);

insert into `user` (`name`, `email`, `password`) values 
	('leandro', 'leandro.gomes@betrybe.com', '123456'),
	(NULL, 'anonymous@betrybe.com', '123456');
    
