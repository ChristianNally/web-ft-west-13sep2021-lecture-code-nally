

dealerships
-----------
PK id   SERIAL
  address
  telephone number
  ...


1, "1 Main Street", 222-333-4444
2, "2 South Street", 222-333-4445
...


vehicles
--------
PK id
FK dealership_id INTEGER
  make
  model
  year     INTEGER 
  colour
  ...


1, 2, Ford, T, 1905, Black
2, 1, Ford, F-150, 2021, Black
