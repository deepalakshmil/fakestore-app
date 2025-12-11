# FakeStore E-Shopping Web Application

A responsive e-commerce web application built using React, JSX, CSS Modules, and Bootstrap. This project interacts with the FakeStore REST API to display products, view individual product details, and perform full CRUD operations (Create, Read, Update, Delete).

Features

## Product Management

- View a list of products (GET API)

- View full product details

- Update product information (PUT API)

- Delete a product (DELETE API)

- Add a new product (POST API)

## UI & Frontend

- Fully responsive UI using CSS Modules + Bootstrap

- Image carousel on Home page

- Clean component-based structure (AddProduct, ProductDetails, ProductList, etc.)

- Error handling + NotFound page

📂 Project Structure
src/
├── assets/
├── components/
│ ├── AddProduct.jsx
│ ├── ProductDetails.jsx
│ ├── ProductList.jsx
│ ├── UpdateProduct.jsx
│ ├── Home.jsx
│ └── Navigation.jsx
├── App.jsx
├── index.css
└── main.jsx

Follow the steps below to access the webpage.

To run the webpage, first start the server and then open the site.

- The individual pages include navigation links to the Home Page, Product List, and Add Product.

- The Product List page retrieves the list of products using the GET API and allows you to view individual product details.

- The Product Details page allows you to update product information using the PUT API.

- The Product Details page also allows you to delete product information using the DELETE API.

- The Add Product page allows you to create new product information using the POST API.

## How to Run the Project

npm install
npm run dev

Then open the localhost URL from the terminal.

Website Live Preview: https://fakestore-management-ui.netlify.app
