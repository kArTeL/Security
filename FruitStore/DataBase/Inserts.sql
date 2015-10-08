-- INSERTS  ROLES, USERS, ETC, ETC ----
INSERT INTO role (name) VALUES("Administrator");
INSERT INTO role (name) VALUES("User");

-- INSERTS INITIAL USERS
INSERT INTO user (username,password,email,delivery_address,role) VALUES("administrator","asp128","neilliga@gmail.com", "Carmiol 2 casa #25", 1);
INSERT INTO user (username,password,email,delivery_address,role) VALUES("user","29102910","ngarcia@soin.co.cr", "Carmiol 2 casa #25", 2);

-- Create a valid session
INSERT INTO session(uuid,user) VALUES("23140328424",1);


-- INSERT Fruits
INSERT INTO fruit(name, cost, quantity) VALUES("Manzana", 5,10);
INSERT INTO fruit(name, cost, quantity) VALUES("Pera", 1,2);
INSERT INTO fruit(name, cost, quantity) VALUES("Uva", 2, 1);



INSERT INTO transaction(user,creditCardNumber) VALUES(2,"4-348293-492349");

INSERT INTO sale(fruit,quantity, transaction) VALUES(1,1,1);
