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




dealerships
-----------
PK id   SERIAL
  address TEXT
  telephone number
  ...

1, "10 Main Street", 222-333-4444
2, "2 South Street", 222-333-4445
...

SELECT users.id, dealerships.telephone, users.email FROM dealerships 
INNER JOIN dealership_user ON dealerships.id = dealership_user.dealership_id
INNER JOIN users ON dealership_user.user_id = users.id
WHERE dealerships.id = 2;

dealership_user
---------------
PK id
FK dealership_id INTEGER
FK user_id       INTEGER

1,1
1,2
2,1
2,2

users (1,234,567)
-----
id SERIAL
email
password
admin BOOLEAN
administration_postal_address CHAR(64)

1, sandra@example.com, $2b$10$fdafdasfdsafdsaf
2, peter@example.com, $2b$10$fdafdasfdsafdsafd








admins
------
PK id
FK user_id INTEGER UNIQUE






Migration
=========

ALTER TABLE users >><CNXJHCJXHFD
CREATE TABLE copies 

code change

