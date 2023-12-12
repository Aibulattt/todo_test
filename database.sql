create TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

create TABLE todos(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    created TIMESTAMP,
    userId INTEGER,
    FOREIGN  KEY (userId) REFERENCES users (id),
    isDone BOOLEAN
);
