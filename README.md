This is a simple REST API for performing CRUD (Create, Read, Update, Delete) operations on a product database, built with Node.js, Express, and MySQL.



Here is a complete, well-formatted description you can use for your `README.md` file on GitHub.


# Node.js & MySQL CRUD API

A simple RESTful API for performing CRUD (Create, Read, Update, Delete) operations on a product database. This project was built using Node.js, the Express framework, and a MySQL database.

Features 

* reate: Add new products to the database.
* Read: Retrieve a list of all products.
* Update: Modify the details of an existing product.
* Delete: Remove a product from the database.


 Technologies Used 

* Backend: Node.js, Express.js
* Database* MySQL
* Driver: `mysql2` npm package


Prerequisites

Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/en/)
* [MySQL Server](https://dev.mysql.com/downloads/mysql/)

Installation & Setup 

1. Clone the repository:
    
    git clone [https://github.com/KrishnaCodes06/nodee-mysql-crud.git](https://github.com/KrishnaCodes06/nodee-mysql-crud.git)
  

2.  Navigate to the project directory:
    
    cd nodee-mysql-crud
    

3.  Install dependencies:
   
    npm install
    

4.  Set up the database:
    * Connect to your MySQL server.
    * Run the following SQL commands to create the database and table:
        ```sql
        CREATE DATABASE IF NOT EXISTS store_db;
        USE store_db;
        CREATE TABLE IF NOT EXISTS products (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          price DECIMAL(10, 2) NOT NULL
        );
     
5.  Configure the database connection:
    * Open the `server.js` file.
    * Update the `password` field in the `db.createConnection` object with your MySQL root password.

6.  Run the server:
    ```bash
    node server.js
    ```
    The API will be running on `http://localhost:3000`.

API Endpoints 

The following endpoints are available:

| Method | Endpoint         | Description                   | Body (JSON) Example                              
|--------|------------------|-------------------------------|---------------------------------------------------
| `POST` | `/products`      | Create a new product.         | `{ "name": "Laptop", "price": 1200.50 }`           
| `GET`  | `/products`      | Get a list of all products.   | (Not required)                                    
| `PUT`  | `/products/:id`  | Update an existing product.   | `{ "name": "Gaming Laptop", "price": 1550.75 }`     
| `DELETE`| `/products/:id` | Delete a product.             | (Not required)                                    

