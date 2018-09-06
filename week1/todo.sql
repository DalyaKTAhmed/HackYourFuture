CREATE TABLE user(
userID  INT NOT NULL AUTO-INCREMENT,
first_name VARCHAR(100),
last_name VARCHAR(100),
username VARCHAR(100),
user_password CHAR (10),
PRIMARY KEY (userID)
);

CREATE TABLE todos(
    itemID INT NOT NULL AUTO-INCREMENT,
    userID INT NOT NULL,
    item_text VARCHAR(100),
    issue_date date,
    dead_line date;
    mark BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (userID),
    PRIMARY KEY (itemID)
);

INSERT INTO user(first_name,last_name,username,user_password)
VALUSE (Dalia,Ahmed,DaAh,182924);

INSERT INTO todos(item_text,issue_date,dead_line,mark)
VALUSE (DS_week1_hm,2018-08-30,2018-08-31,true);
