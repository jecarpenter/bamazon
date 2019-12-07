DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(255),
  department_name VARCHAR(100),
  price INTEGER(10) NOT NULL,
  stock_quantity INTEGER(200),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone X", "Electronics", 800.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung 55 Inch Smart TV", "Electronics", 447.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Biotin Infused with Organic Virgin Coconut Oil", "Health and Lifestyle", 11.00, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tebik 45 Pack Fineliner Color Pens", "Arts, Crafts, and Sewing", 16.79, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Instant Pot", "Kitchen", 64.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Compact USB MIDI Controller", "Music", 89.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yamaha YDP103 Piano", "Music", 799.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Heat Resistant Kitchen Gloves", "Kitchen", 7.64, 34);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Travel Laptop Backpack", "fashion", 38.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Faux Leather Executive Chair", "Furniture", 239.99, 15);