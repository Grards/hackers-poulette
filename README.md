
# Hackers Poulette

This project is based on PHP technology MYSQL DataBases.

## 🛠 Skills
HTML, CSS, JS, PHP, MYSQL, GIT, XAMPP, Tailwind

## Concepts
Sanitization, Validation, Security, UX/UI

## Screenshots

![Desktop Example](https://raw.githubusercontent.com/Grards/hackers-poulette/main/assets/img/example-desktop.png)
![Mobile Example](https://raw.githubusercontent.com/Grards/hackers-poulette/main/assets/img/example-mobile.png)


## Deployment

This project uses a MYSQL DB with theses fields :

CREATE TABLE `hackers_poulette` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `filename` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-> The DB is in /backend/db/hackers_poulettes.sql
