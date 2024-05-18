CREATE DATABASE chatgpt_db;

USE chatgpt_db;

CREATE TABLE pergunta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_message TEXT NOT NULL,
    chatgpt_response TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);