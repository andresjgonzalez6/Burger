CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
id INTEGER NOT NULL auto_increment,
burger_name varchar(100) not null,
devoured boolean default false,
primary key (id)
);