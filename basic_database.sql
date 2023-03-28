
CREATE DATABASE task_management;
CREATE TABLE tasks (
  task_id INT NOT NULL AUTO_INCREMENT,
  task_name VARCHAR(255) NOT NULL,
  task_description TEXT,
  task_due_date DATE,
  task_status ENUM('todo', 'in_progress', 'done') DEFAULT 'todo',
  PRIMARY KEY (task_id)
);
INSERT INTO tasks (task_name, task_description, task_due_date, task_status) 
VALUES ('Finish report', 'Write up the findings from the user research', '2023-04-15', 'in_progress');