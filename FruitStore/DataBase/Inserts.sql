-- INSERTS  ROLES, USERS, ETC, ETC ----
INSERT INTO role (name) VALUES("Administrator");
INSERT INTO role (name) VALUES("User");

-- INSERTS INITIAL USERS
INSERT INTO user (username,password,email,delivery_address,role) VALUES("administrator","asp128","neilliga@gmail.com", "Carmiol 2 casa #25", 1);
INSERT INTO user (username,password,email,delivery_address,role) VALUES("user","29102910","ngarcia@soin.co.cr", "Carmiol 2 casa #25", 2);

-- Create a valid session
INSERT INTO session(uuid,user) VALUES("23140328424",1);


-- INSERT Fruits
INSERT INTO fruit(name,description, imageURL, cost, quantity) VALUES("Manzana","Deliciosa manzana que ayuda para tu salud, cosechada por agricultores costarricenses.","http://i.imgur.com/Mljgbms.png?1",  5,10);

INSERT INTO fruit(name,description, imageURL, cost, quantity) VALUES("Banano","Las bananas, sin dudas, que están entre las frutas más ricas, sino es la más rica. No sólo es rica sino que es súper sana, contiene azúcares naturales, ofrece fibra y energías, instantáneamente.","http://pngimg.com/upload/banana_PNG845.png",  1,20);

INSERT INTO fruit(name,description, imageURL, cost, quantity) VALUES("Pera","La pera es cosechada por los agricultores costarricenses en diversas zonas del país, es saludable comer una por lo menos una vez al día", "http://pngimg.com/upload/pear_PNG3466.png", 3,2);

INSERT INTO fruit(name,description, imageURL, cost, quantity) VALUES("Uva", "Delisiosas uvas para disfrutar en familiar","http://pngimg.com/upload/grape_PNG2982.png",2, 1);



INSERT INTO transaction(user,creditCardNumber) VALUES(2,"4-348293-492349");

INSERT INTO sale(fruit,quantity, transaction) VALUES(1,1,1);
