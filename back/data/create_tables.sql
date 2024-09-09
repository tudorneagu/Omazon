BEGIN;

DROP TABLE IF EXISTS user_products, carts, products, categories, tags, users CASCADE;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    text VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT,
    inStock BOOLEAN NOT NULL,
    category_id INT REFERENCES categories(id),
    tag_id INT REFERENCES tags(id)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    account_type VARCHAR(50) NOT NULL 
);


CREATE TABLE user_products (
    user_id INT REFERENCES users(id),
    product_id INT REFERENCES products(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, product_id)
);


CREATE TABLE carts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMIT;
