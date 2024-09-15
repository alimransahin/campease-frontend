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
- **Customer Review**: show our customer review.
- **Newsletter**: Subscriber get updated product info by Email.
- **FAQ Section**: Answers common questions about the shop and products.
- **Footer**: Displays contact information and social media links.

### 2. Products Page

- Display all products in grid or list view.
- Filter products by category, price, and sort by ascending/descending price.
- Search products by name.
- Reset filters using the "Clear" button.

### 3. Product Details Page

- Shows product all information like price, description, ratings, and available stock.
- Image gallery for product pages with a magnifier effect.
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

### 7. About Us Page

- Displays the shop’s contact information and mission.
- Includes a map and social media links.

## Technical Specifications

### Frontend:

- **React**: For building the user interface.
- **Redux**: State management for a consistent experience across pages.
- **Tailwind CSS**: For styling and responsive design.
- **RTK Query**: For efficient API fetching and cache management.
- **Toast**: For show information and success.

### Backend:

- **Node.js**: For server-side logic.
- **Express**: For handling CRUD operations.
- **MongoDB**: For database storage .

## Installation and Setup

Follow these steps to set up and run the Campease application locally.

### 1. Clone the Repository

Start by cloning the Campease repository from GitHub:

```bash
git clone https://github.com/your-repo/campease.git
cd campease
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```
