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
PK id
FK dealership_id INTEGER
  make     TEXT
  model    
  year     INTEGER 
  colour
  ...


1, 2, Ford, T, 1905, Black
2, 1, Ford, F-150, 2021, Black
