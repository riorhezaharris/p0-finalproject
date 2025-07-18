USE p0finalproject;
CREATE TABLE forms (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    subject VARCHAR(255),
    message VARCHAR(255),
    PRIMARY KEY (id)
);