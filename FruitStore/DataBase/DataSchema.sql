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

CREATE TABLE orderSale (
  id INT NOT NULL AUTO_INCREMENT,
  sale_date DATE NOT NULL,
  user   INT NOT NULL REFERENCES user(id),
  total_cost INT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE sale (
  id       INT NOT NULL AUTO_INCREMENT,
  fruit    INT  NOT NULL REFERENCES fruit(id),
  quantity INT NOT NULL,
  orderSale    INT  NOT NULL REFERENCES orderSale(id),
  PRIMARY KEY(id)
);

CREATE TABLE orderPurshase (
  id INT NOT NULL AUTO_INCREMENT,
  purchase_date DATE NOT NULL,
  user   INT NOT NULL REFERENCES user(id),
  PRIMARY KEY(id)
);
CREATE TABLE purchase (
  id INT NOT NULL AUTO_INCREMENT,
  quantity INT NOT NULL,
  fruit  INT  NOT NULL REFERENCES fruit(id),
  orderPurshase INT  NOT NULL REFERENCES orderPurshase(id),
  PRIMARY KEY(id)
);


CREATE TABLE session (
  id INT NOT NULL AUTO_INCREMENT,
  uuid VARCHAR(40) NOT NULL,
  creationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  expirationDate DATETIME,
  enabled INT DEFAULT 1,
  user  INT  NOT NULL REFERENCES user(id),
  PRIMARY KEY(id)
);
