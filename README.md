# 🛒 Product List with Cart

A React application that simulates an online store with a complete shopping cart experience. Products are loaded directly from a Supabase database using its REST API. Orders are dynamically registered, and product stock is updated in real time.

## 📸 Overview

- 📦 View a list of products
- ➕ Add items to the cart
- 🗑️ Remove items from the cart
- 🔼🔽 Adjust item quantities
- 🛍️ Checkout with a detailed order summary
- ♻️ Start a new purchase with a reset cart


## ⚙️ Features

✅ **Product Listing**  
Products are fetched from the `products` table in Supabase using its REST API.

✅ **Interactive Cart**  
Add, remove, and update product quantities with immediate UI feedback.

✅ **Checkout with Modal**  
When checking out, a modal displays the full summary of the purchased items and total amount.

✅ **Stock Update**  
On checkout, the app creates a new record in the `order` table, adds items to `order_items`, and updates the stock in the `products` table.

✅ **Session Reset**  
Clicking "New Purchase" clears the cart and localStorage for a fresh shopping experience.

## 🌐 Visit the App

You can try out the live version of the app here:

[Try Product List with Cart](https://products-cart-omega.vercel.app/)

## 🧑‍💻 Tech

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
