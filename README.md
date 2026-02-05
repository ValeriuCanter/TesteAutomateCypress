

# 🛒 Cypress Tests for Shopping Website

This repository contains automated tests written in **Cypress** for the demo shopping website [saucedemo.com](https://www.saucedemo.com).  
The tests cover login, logout, navigation, cart functionality, checkout, and product details.

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ValeriuCanter/TesteAutomateCypress.git
   cd TesteAutomateCypress
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run Cypress:
   ```bash
   npx cypress open
   ```
   or headless:
   ```bash
   npx cypress run
   ```

---

## 🧪 Test Cases Implemented

### 🔐 Authentication
- **Invalid login** → Verifies error message when username or password is incorrect.  
- **Valid login** → Confirms successful login with `standard_user`.  
- **Logout** → Ensures user can log out via the sidebar menu.  

### 📂 Navigation
- **Sidebar menu open/close** → Checks if the sidebar can be opened and closed.  
- **Product details page** → Validates that clicking a product opens its detail page.  
- **Back to products button** → Ensures the button redirects back to the main inventory page.  

### 🛒 Cart Functionality
- **Add product to cart** → Adds a product and verifies it appears in the cart.  
- **Remove product from cart** → Removes a product and checks that the cart is updated.  

### ✅ Checkout
- **Complete order** → Adds a product, fills checkout form, and verifies order completion.  

---

## 📂 Project Structure

```
TesteAutomateCypress/
│
├── cypress/
│   ├── e2e/
│   │   └── shopping-tests.cy.js   # Contains all test cases
│   └── support/
│
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used
- [Cypress](https://www.cypress.io/) – End-to-end testing framework  
- JavaScript (ES6)  

---

## 🚀 How to Run Tests
1. Open Cypress Test Runner:
   ```bash
   npx cypress open
   ```
2. Select the test file `shopping-tests.cy.js`.  
3. Run the tests in Chrome, Edge, or Electron.  

---

## 👤 Author
Created by **Valeriu Canțer** for practicing automated testing with Cypress.  



   
