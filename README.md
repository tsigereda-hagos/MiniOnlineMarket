# MiniOnlineMarket

# Project Description
This repository contains the source code for the Mini Online Market, a full-stack web application built using React for the frontend and Java Spring Boot for the backend. The application is designed to provide a comprehensive platform for managing products, orders, users, and roles within an online marketplace environment.

# Features
* User Authentication and Authorization: Secure login and registration processes for different user roles (Admin, Seller, Buyer).
* Product Management: Functionality to add, update, delete, and view products.
* Order Processing: Support for placing, cancelling, shipping, and delivering orders.
* Review System: Allows customers to post and manage reviews for products.
* Dynamic Data Interaction: Real-time data handling using React state management and Redux for complex state scenarios.
* Admin and Seller Dashboards: Specialized dashboards for managing application specifics.

# Technologies Used
Frontend: React, Redux, Material-UI, Axios
Backend: Spring Boot, Spring Security, JPA, JWT for authentication
Database: h2 database
Documentation: Swagger UI

# Getting Started
1. Clone the repository
git clone https://github.com/tsigereda-hagos/MiniOnlineMarket.git
cd MiniOnlineMarket

2. Set up the Backend
cd Backend/waa-main
** Start the Spring Boot server with the following command or run the project in your favorite IDE
 mvn spring-boot:run

3. Set up the Frontend
cd Frontend
** Install dependencies:
npm install
** Start the development server:
npm start

4. Open your browser and navigate to http://localhost:3000

5. API Documentation
After running the backend server, access the Swagger UI to view the API documentation at
 http://localhost:8080/swagger-ui.html


## License
This project is licensed under the MIT License - see the LICENSE file for details


## Credentials to Access this website are as Follows:-
Username         password         role

admin            1234             Admin
sami             1234             Buyer
adonay           1234             Seller


## Group Members:

1.	Adonay Gebrerufael
2.	Samsom Michael
3.	Yosief Gebrewold
4.	Tsigereda Hagos 