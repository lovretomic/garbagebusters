CREATE TABLE App_User
(
  ID_User INT NOT NULL,
  name VARCHAR NOT NULL,
  surname VARCHAR,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  profile_photo VARCHAR NOT NULL,
  username VARCHAR NOT NULL,
  PRIMARY KEY (ID_User),
  UNIQUE (email)
);

CREATE TABLE Admin
(
  ID_User INT NOT NULL,
  PRIMARY KEY (ID_User),
  FOREIGN KEY (ID_User) REFERENCES App_User(ID_User)
);

CREATE TABLE Warden
(
  ID_User INT NOT NULL,
  PRIMARY KEY (ID_User),
  FOREIGN KEY (ID_User) REFERENCES App_User(ID_User)
);

CREATE TABLE Citizen
(
  ID_User INT NOT NULL,
  PRIMARY KEY (ID_User),
  FOREIGN KEY (ID_User) REFERENCES App_User(ID_User)
);

CREATE TABLE Eco_Association
(
  is_approved BOOLEAN NOT NULL,
  social_media VARCHAR NOT NULL,
  ID_User INT NOT NULL,
  PRIMARY KEY (ID_User),
  FOREIGN KEY (ID_User) REFERENCES App_User(ID_User)
);

CREATE TABLE Cleanup_Action
(
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  max_volunteers INT NOT NULL,
  action_date DATE NOT NULL,
  action_time TIME NOT NULL,
  ID_Action INT NOT NULL,
  action_location VARCHAR NOT NULL,
  ID_User INT NOT NULL,
  PRIMARY KEY (ID_Action),
  FOREIGN KEY (ID_User) REFERENCES Eco_Association(ID_User)
);

CREATE TABLE volunteers
(
  singup_time TIME NOT NULL,
  ID_User INT NOT NULL,
  ID_Action INT NOT NULL,
  PRIMARY KEY (ID_User, ID_Action),
  FOREIGN KEY (ID_User) REFERENCES Citizen(ID_User),
  FOREIGN KEY (ID_Action) REFERENCES Cleanup_Action(ID_Action)
);

CREATE TABLE Report
(
  ID_Report INT NOT NULL,
  GPS_coordinates VARCHAR NOT NULL,
  photos_before VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  waste_volume FLOAT NOT NULL,
  report_status VARCHAR NOT NULL,
  photos_after VARCHAR NOT NULL,
  Report_date DATE NOT NULL,
  ID_Action INT,
  ID_User INT NOT NULL,
  ID_Warden INT,
  PRIMARY KEY (ID_Report),
  FOREIGN KEY (ID_Action) REFERENCES Cleanup_Action(ID_Action),
  FOREIGN KEY (ID_User) REFERENCES Citizen(ID_User),
  FOREIGN KEY (ID_Warden) REFERENCES Warden(ID_User)
);

CREATE TABLE Orders
(
  ID_Order INT NOT NULL,
  company_name VARCHAR NOT NULL,
  order_status VARCHAR NOT NULL,
  issue_date DATE NOT NULL,
  ID_Report INT NOT NULL,
  ID_Warden INT NOT NULL,
  PRIMARY KEY (ID_Order),
  FOREIGN KEY (ID_Report) REFERENCES Report(ID_Report),
  FOREIGN KEY (ID_Warden) REFERENCES Warden(ID_User)
);