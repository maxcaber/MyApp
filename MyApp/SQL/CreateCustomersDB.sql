create database Customers;
go;

use Customers;
go;

create table Customer(
   Id int primary key identity(1,1)
    ,firstName varchar(255)
	,lastName varchar(255)
)

go;

insert into Customer(firstName,lastName)values ('Joe','Smith');
insert into Customer(firstName,lastName)values ('Steve','Jones');
insert into Customer(firstName,lastName)values ('Cat','Lady');
insert into Customer(firstName,lastName)values ('Leo','Tabby');
insert into Customer(firstName,lastName)values ('Audrey','Blackcat');
insert into Customer(firstName,lastName)values ('Terrisa','Kwan');
insert into Customer(firstName,lastName)values ('Stupid','Susan');