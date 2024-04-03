SELECT * FROM ralbankdb;

-- select * from ralbankdb.application_details;
-- update application_details
-- set applicationid=LPAD(FLOOR(RAND() * 999999.99), 6, '1'); 

-- delete from user_history where itin='922830046'



CREATE TABLE application_details1 (
applicationid varchar(30) PRIMARY KEY,
firstname varchar(15) not null,
lastname varchar(15) not null ,
gender varchar(10) not null ,
dob date not null,
emailid varchar(25) not null, 
fathername varchar(20) not null, 
mothername varchar(20) not null,
occupation varchar(20) not null ,
phonenumber bigint not null  ,
itin bigint not null  ,
pincode varchar(20) not null ,
address varchar(50) not null,
landmark varchar(50) not null, 
city varchar(20) not null ,
grossincomemonthly int not null , 
companyaddress varchar(60) not null, 
companyname varchar(60) not null,
credit_score int not null,
maritalstatus varchar(20) not null, 
residentialstatus varchar(20) not null, 
card_type varchar(15) ,
liabilities varchar(5) not null, 
sign varchar(30) not null

    
);



create table user_history (
    itin bigint ,
    phonenumber bigint not null,
    credit_score int not null ,
    Criminal_history varchar(5) not null 

);

insert into user_history
values
 ('922830045',' 9883013673','920','No'),
 ('913826634',' 6301866512','678','No'),
 ('996843302',' 8803139492','482','yes'),
 ('972865569',' 5019883600','940','yes');
 
 
 
 
 
 
 
 
 
 CREATE TABLE track_application(
  applicationid varchar(50),
  status varchar(50)
  );
  
insert into track_application
values
 ('ID20230712103212','Documentation verfifcation in process'),
 ('ID20230712103327','Approved'),
 ('ID20230712103610track_application','Rejected'),
 ('ID20230712103525','Shipped'),
 ('ID20230712102952','Application Received');

 
 
 
  
 
CREATE TABLE track AS
 SELECT i.applicationid, i.itin, i.phonenumber, i.credit_score, CASE
    WHEN i.itin = t.itin AND i.phonenumber = t.phonenumber AND t.credit_score > 800 AND t.Criminal_history= 'No'  THEN 'Approved'
    ELSE 'Not Approved'
END AS status
FROM application_details i
INNER JOIN user_history t ON t.phonenumber = (SELECT MAX(phonenumber) FROM user_history);


create table status_tracking 
select applicationid, status
FROM track;







DELIMITER //
CREATE TRIGGER update_trigger AFTER UPDATE ON application_details
FOR EACH ROW
BEGIN
    -- Update the target table based on the updated values from table1
    UPDATE track
    SET applicationid = NEW.applicationid,
        itin = NEW.itin,
        phonenumber = NEW.phonenumber,
        credit_score = NEW.credit_score,
        status = NEW.status
    WHERE track.itin = NEW.itin;
END//
DELIMITER ;





-- CREATE TABLE application_reference (
--   id INT AUTO_INCREMENT NOT NULL,
--   cname VARCHAR(25),
--   appid CHAR(11),
--   PRIMARY KEY (id)
-- );

-- DELIMITER //

-- CREATE TRIGGER set_appid BEFORE INSERT ON application_reference
-- FOR EACH ROW
-- BEGIN
--   SET NEW.appid = CONCAT(NEW.id, RIGHT(CONCAT('2023', CAST(NEW.id AS CHAR(7))), 7));
-- END //

-- DELIMITER ;






