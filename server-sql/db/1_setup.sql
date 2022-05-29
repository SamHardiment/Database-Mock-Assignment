DROP TABLE IF EXISTS bands;

CREATE TABLE bands (
id serial PRIMARY KEY,
bandName varchar(50) NOT NULL,
listeners INT,
genre varchar(20)
);
