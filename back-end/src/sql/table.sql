
CREATE TABLE desafioo.Client(
    id_client INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cnpj VARCHAR(50) NOT NULL,
    fantasy_name VARCHAR(50) NOT NULL,
    social_reason VARCHAR(50) NOT NULL,
    cep INT NOT NULL,
    address VARCHAR(50) NOT NULL,
    number VARCHAR(50) NOT NULL,
    complement VARCHAR(50) NOT NULL,
    district VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    uf VARCHAR(50) NOT NULL
);

CREATE TABLE desafioo.User(
    id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_client INT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_client) REFERENCES Client(id_client)
);

INSERT INTO desafioo.Client (cnpj, fantasy_name, social_reason, cep, address, number, complement, district, city, uf) VALUES ("87099170000153", "Paulinho", "Paulao", 66073319, "Passagem João Monteiro", "104B", "Apartamento", "Guamá", "Belém", "PA" )