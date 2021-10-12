dealerships
-----------
PK id   SERIAL
  address TEXT
  telephone number
  ...


1, "10 Main Street", 222-333-4444
2, "2 South Street", 222-333-4445
...

SELECT * FROM vehicles WHERE dealership_id = 2;

vehicles
--------
PK id BIGSERIAL
FK dealership_id INTEGER
  make     TEXT
  model    
  year     INTEGER 
  vehicle_colour    CHAR(32)
  key_cabinet_location INTEGER
  key_colour     ...


1, 2, Ford, T, 1905, Black
2, 1, Ford, F-150, 2021, Black


users (1,234,567)
-----
id SERIAL
email
password
admin BOOLEAN
administration_postal_address CHAR(64)

admins
------
PK id
FK user_id INTEGER UNIQUE






Migration
=========

ALTER TABLE users >><CNXJHCJXHFD
CREATE TABLE copies 

code change

