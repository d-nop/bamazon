CREATE DATABASE bamazon;
USE bamazon;

-- Create the table products.
CREATE TABLE products (
  item_id int AUTO_INCREMENT,
  product_name varchar(255) NOT NULL,
  department_name varchar (255) NOT NULL,
  price int NOT NULL,
  stock_quantity int NOT NULL,
  PRIMARY KEY(item_id)
);

-- Insert a set of records.
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("OtterBox Defender Series Case for iPhone X", "Accessories",89.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Assassin's Creed: Origins for PS4", "Games", 49.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Selena Gomez Perfume for Women EDP Spray 1.7oz", "Health and Beauty", 39.99, 70);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Party Tyme Karaoke - Contemporary Christian 2 hits", "Music", 19.99, 90);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("New York Yankees Logo Standard Knit Pillow Case", "Home", 39.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Coldsteel Kitchen Classics Whole Knife", "Home", 189.99, 95);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Unforgivable Woman by Sean Jean EDP Spray 2.5 oz", "Health and Beauty", 29.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Disney 2 Pack: Frozen Olaf's Quest & Big Hero 6 Nintendo 3DS","Games", 24.99, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Lifeproof Apple iPhone 7 PLUS FRE - ASPHALT BLACK", "Accessories", 49.99, 90);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Tommy Bahama Island Life Eau De Cologne 1.7oz Spary for Men", "Health and Beauty", 29.99, 100);
