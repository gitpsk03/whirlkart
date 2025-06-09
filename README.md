# 🛒 Whirlkart

**Whirlkart** is a full-featured e-commerce web application built using **React.js**. Its core functionalities are product browsing, cart management, search, category-based filtering, user account handling, and a payment flow.

---

## 🔧 Tech Stack

* **Frontend:** React.js, React Router
* **Styling:** CSS
* **State Management:** React Context API, `useState`, `useEffect`
* **Routing:** React Router DOM

---

## 🚀 Features

### ✅ Core Functionality

* **User Authentication**: Login system to simulate access control.
* **Product Listings**: Multiple product categories like Headphones, Appliances, Toys, etc.
* **Product Details**: Each item opens to a detailed view.
* **Add to Cart**: Products can be added to a persistent cart.
* **Cart Page**: Displays added items with total calculation.
* **Search Functionality**: Dynamic search with category-based filtering.
* **Checkout Flow**: Includes Cart → Payment → Order Details.
* **Account Pages**: Simulates user profile and order history.

### 🧩 Component Breakdown

* `Home`, `Login`, `Account`, `Profile`: Major route-based components.
* `ProductItem`, `Cart`, `PaymentPage`: E-commerce flow.
* `Header`: Dynamic top bar that updates search and category.
* `SearchListPage`: Displays filtered products based on query/category.
* `AddedToCartPage`, `OrderDetails`: UI for cart confirmation and order summary.

---

## 🗂️ Routing Overview

| Route                                                           | Component            | Description                |
| --------------------------------------------------------------- | -------------------- | -------------------------- |
| `/`                                                             | `Home`               | Landing page               |
| `/login`                                                        | `Login`              | Auth page                  |
| `/cart`                                                         | `Cart`               | View and manage cart items |
| `/payment-page`                                                 | `PaymentPage`        | Payment simulation         |
| `/account`, `/profile`                                          | `Account`, `Profile` | User info                  |
| `/product-page`                                                 | `ProductItem`        | Product detail             |
| `/search-list-page`                                             | `SearchListPage`     | Filtered results page      |
| `/order-details`                                                | `OrderDetails`       | Final order confirmation   |
| Category routes like `/headphones`, `/furniture`, `/toys`, etc. |                      |                            |

---

## 🔄 State Management

* **CartContext**: Shared across all components for cart items, total price, and login status.
* `searchQuery` & `category` states track the current filtering for the `SearchListPage`.

---

## 📦 Sample Components

* `BoatProducts`, `NoiseProducts`, `BoultProducts`, etc.: Brand-specific views
* `Furniture`, `Toys`, `Footwear`: Category-specific pages
* `Categories`, `WhirlkartBrands`: Navigation support and UI grouping

---

## 🧠 Logic Highlights

* **Dynamic Total Calculation**: Uses `useEffect` to update total cart value when cart list changes.
* **Search & Category Handling**: Passed via props to `SearchListPage`.
* **Routing Logic**: Login page hides header using `useLocation`.

---

## 📌 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/whirlkart.git
   cd whirlkart
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the app:

   ```bash
   npm start
   ```

