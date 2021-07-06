<div align="center">
  <h1>AskUs!</h1>
</div>

This project was created using basics principles of EJS, MySql, Bootstrap and NodeJs. Developed during the course: Formação Node.js by [Victor Lima - Guia do Programador](https://guiadoprogramador.com/)

<div align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ItaloMedici/plataforma_pergunta_e_resposta?color=%233399FF&style=for-the-badge">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/ItaloMedici/plataforma_pergunta_e_resposta?color=yellow&logo=Javascript&style=for-the-badge">
</div>

## :camera: Images
<p align="center">
  <img alt="Usage" src="/public/img/usage.gif">
</p>

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [MySql](https://www.mysql.com/), [Bootstrap](https://getbootstrap.com/),  [Node.js v10.16](https://nodejs.org/en/) or higher installed on your computer, From your command line:


```bash
# Clone this repository
$ git clone https://github.com/ItaloMedici/plataforma_pergunta_e_resposta.git 

# Go into the repository
$ cd plataforma_pergunta_e_resposta

# Install dependencies
$ npm install

# After all dependeces intalled, you'll need create the database. 
# Open MySql config
$ mysql

# Create your database, you can change the name.
$ CREATE DATABASE askUs;

# Check if your database has been created 
$ SHOW  DATABASE;

# If is every thing fine, exit.
$ exit;
```

With everything set up, you need to change the user (if different from root) and password that was usaed in MySql intallation. To do this, open ```database.js``` file and change the varuables if necessary. Now, let's run it!!
```bash
# You can also run with node, however using nodemon we can ake the server restart by itself when changed.
$ nodemon index.js
```
Now, just acess the localhost and enjoy!
http://localhost:8080/ :rocket:

Made with ♥ by Ítalo Médici :wave: [Get in touch!](https://www.linkedin.com/in/%C3%ADtalo-m%C3%A9dici-070336186/)
<p align="center" style="font-size: 14px; letter-spacing: 4px; opacity: 40%">never stop learning!</p>


