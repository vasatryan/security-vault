# Security Vault

## Table of Contest
* [Introduction](#introduction)
* [Features](#features)
* [Installation](#installation)
* [Run](#run)
* [Contributing](#contributing)

## Introduction
Security Vault is a web application designed to help companies, and individuals, assess the security of their websites and servers. With Security Vault, you can quickly analyze your website's and server's vulnerabilities and receive suggestions on how to improve their security.


## Features
1. Packet Suggestions: Receive packet suggestions to check if your website and server are secured or not.
2.  Comprehensive Assessment: Assess your website's and server's security against various types of attacks including SQL injection, DoS, DDoS, buffer overflow, reverse engineering, cross-site scripting (XSS), CSRF, and brute force attacks.
3. Technologies Used:
    - Backend: FastAPI, PostgreSQL
    - Frontend: HTML, CSS, JavaScript
    - Security Testing: SQL (for SQL injection), Python (for DoS, DDoS, reverse engineering, CSRF, brute force attacks), C (for buffer overflow attack)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/johnasatryan/cheap-cloud.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd security-vault-backend
    ```

## Run

1. Open your terminal.
2. Navigate to the directory containing the `security-vault-backend`.

3. Install and activate VENV:  
    #### 3.1 Install venv:
        
        python -m venv venv

    #### 3.2 Activate venv

        Linux:  
            ./venv/Scripts/Activate

        Windows:
            .\venv\Scripts\Activate  

        if it doesn't work then։
        
            Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
            .\venv\Scripts\Activate

4. Install requirements:
    ```bash
    pip install -r .\requirements.txt

5. Creating tables:
    - You'll need to set up your database in PostgreSQL. In your project, navigate to app/database.py to input the necessary information for your database connection.
    - Next, open your terminal and execute the following command to create the tables:
        ```bash
        python app/create_tables.py  

    - This command will initialize the database schema according to your specifications.

6. Run  :
    #### 6.1 Run the code  :
        python app/main.py  
    
    #### 6.2 Stop Server:
        ^C



## Contributing
Contributions to the Security Vault project are welcome! If you find issues or have ideas for improvements, please follow these steps:

- Check for existing issues: Before creating a new issue, please check if the same issue or feature request already exists.
- Open an issue: If you don't find the issue or feature request already, open a new issue in the GitHub repository, providing as much detail as possible, including steps to reproduce the issue if it's a bug.
- Create a pull request: If you'd like to contribute directly, fork the repository, create a new branch for your changes, and then submit a pull request. Make sure to include a detailed description of the changes you've made.

Thank you for contributing to Security Vault!
