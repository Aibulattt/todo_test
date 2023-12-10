create TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255)
);

create TABLE todos(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    created DATE,
    user_id INTEGER,
    FOREIGN  KEY (user_id) REFERENCES users (id)
);