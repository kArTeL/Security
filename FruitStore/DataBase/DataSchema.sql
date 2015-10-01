CREATE DATABASE fruitStore;

CREATE TABLE role (
  id  INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(18) NOT NULL,
  PRIMARY KEY(id)
);


CREATE TABLE user  (
  id        INT   NOT NULL AUTO_INCREMENT,
  username  VARCHAR(18) NOT NULL,
  password  VARCHAR(18) NOT NULL,
  email     VARCHAR(22) NOT NULL,
  delivery_address TEXT NOT NULL,
  role INT  NOT NULL REFERENCES role(id),
  -- Same data types as the parent tables
  PRIMARY KEY (id)
);

CREATE TABLE fruit (
  id INT NOT NULL AUTO_INCREMENT,
  name  VARCHAR(22) NOT NULL,
  quantity INT NOT NULL,

  PRIMARY KEY(id)

);

CREATE TABLE sale (
  id INT NOT NULL AUTO_INCREMENT,
  sale_date DATE NOT NULL,
  fruit  INT  NOT NULL REFERENCES fruit(id),
  user   INT NOT NULL REFERENCES user(id),
  quantity INT NOT NULL,
  total_cost INT NOT NULL,

  PRIMARY KEY(id,sale_date,fruit)

);

CREATE TABLE purchase (
  id INT NOT NULL AUTO_INCREMENT,
  purchase_date DATE NOT NULL,
  quantity INT NOT NULL,

  user   INT NOT NULL REFERENCES user(id),
  fruit  INT  NOT NULL REFERENCES fruit(id)

);
