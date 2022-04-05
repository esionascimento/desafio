/* CREATE DATABASE IF NOT EXISTS desafioo; */

CREATE TABLE desafioo.Client(
    id_client INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cnpj INT(20) NOT NULL,
    fantasy_name VARCHAR(50) NOT NULL,
    social_reason VARCHAR(50) NOT NULL,
    cep INT(20) NOT NULL,
    address VARCHAR(50) NOT NULL,
    number VARCHAR(50) NOT NULL,
    complement VARCHAR(50) NOT NULL,
    district VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    uf VARCHAR(50) NOT NULL
);

CREATE TABLE desafioo.User(
    id_user INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_client INT(20) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_client) REFERENCES Client(id_client)
);
