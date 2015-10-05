DELIMITER $$

DROP PROCEDURE IF EXISTS createSession
CREATE PROCEDURE createSession(IN id INT, IN uuid VARCHAR)
BEGIN
    -- DECLARE EXIT HANDLER FOR NOT FOUND, SQLWARNING, SQLEXCEPTION SELECT s FROM user  AS U WHERE U.username = username and   AS res;
    --
    --
    -- SELECT 1 AS res;
    INSERT INTO session(uuid,user) VALUES(uuid,id);

END $$
DELIMITER ;




--TRIGGER WHEN INSERTS IN session

DELIMITER $$

DROP TRIGGER IF EXISTS expirationDate_on_session_trigger $$

CREATE TRIGGER expirationDate_on_session_trigger BEFORE INSERT ON session FOR EACH ROW BEGIN
  SET NEW.expirationDate = NOW() + INTERVAL 2 HOUR;
END $$

DELIMITER ;
