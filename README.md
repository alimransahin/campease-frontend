# Campease - Your One-Stop Camping Shop

Welcome to **Campease**, an e-commerce platform dedicated to camping enthusiasts! We provide a wide variety of camping essentials and outdoor gear, designed to enhance your outdoor adventures.

## Project Overview

**Campease** is designed to offer a seamless shopping experience for campers. Users can explore a variety of products, filter based on categories, add items to their cart, and easily checkout using multiple payment methods. The platform includes key e-commerce functionalities like product management, a cart system, and a user-friendly UI with responsive design.

## Core Features

### 1. Homepage

- **Header**: Includes the logo and navigation links to essential pages.
- **Hero Section**: Visually appealing with highlighted products.
- **Best Selling Products**: Display best-selling products with a “View More” button.
- **Categories Section**: Displays product categories with icons or images.
- **Featured Products**: Highlights specific products with a button to view details.
- **Unique Section**: Features elements like testimonials or video blogs.
- **FAQ Section**: Answers common questions about the shop and products.
- **Footer**: Displays contact information and social media links.

### 2. Products Page

- Display all products in grid or list view.
- Filter products by category, price, and sort by ascending/descending price.
- Search products by name or description.
- Reset filters using the "Clear" button.

### 3. Product Details Page

- Shows product information such as price, description, ratings, and available stock.
- **Add to Cart Button**: Adjust quantity according to stock levels. Disables when out of stock.

### 4. Product Management

- Admin functionality to add, edit, and delete products.
- Products are displayed in a table with actions for updating and deleting.

### 5. Cart Page

- Displays selected products with quantity controls.
- Dynamically updates the total price when products are added, removed, or quantities are changed.
- **Place Order Button**: Proceeds to checkout if the products are in stock.

### 6. Checkout Page

- Collects user details (name, email, phone, address).
- **Payment Methods**: Offers Cash on Delivery or Stripe integration.
- Stock is updated after a successful order.

### 7. About Us Page

- Displays the shop’s contact information and mission.
- Includes a map and social media links.

## Bonus Features

- Image gallery for product pages with a magnifier effect.
- Random featured products refreshing every 10 seconds using RTK Query.
- Stripe integration for online payments.

## Technical Specifications

### Frontend:

- **React**: For building the user interface.
- **Redux**: State management for a consistent experience across pages.
- **Tailwind CSS**: For styling and responsive design.
- **RTK Query**: For efficient API fetching and cache management.

### Backend:

- **Node.js**: For server-side logic.
- **Express**: For handling CRUD operations.
- **MongoDB**: For database storage (optional integration with Mongoose for better schema management).
