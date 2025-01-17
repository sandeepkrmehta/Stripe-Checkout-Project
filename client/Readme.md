# README.md for the frontend
cat <<EOL > README.md
# Stripe Checkout Frontend

This is the frontend of a simple e-commerce platform built with React. It allows users to browse products, manage their cart, and proceed to checkout via Stripe.

## Features

- Display a list of products fetched from the backend.
- Add and remove products from the cart.
- Persist cart data using \`localStorage\`.
- Redirect to Stripe's checkout page for payments.
- Display payment success or failure status.

---

## Technologies

- React.js
- Axios (for API requests)
- React Router DOM (for navigation)

---

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone <""https://github.com/sandeepkrmehta/Stripe-Checkout-Project/tree/main/client"">
   cd client
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:
   Create a \`.env\` file in the root directory and add:
   \`\`\`env
   REACT_APP_API_URL=http://localhost:5000/api
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm start
   \`\`\`

---

## Pages and Components

### Pages

1. **Products Page**:
   - Displays a list of products fetched from the backend.
   - Allows users to add items to the cart.

2. **Cart Page**:
   - Shows all items added to the cart.
   - Allows users to remove items or proceed to checkout.

3. **Checkout Page**:
   - Collects user email and initiates the Stripe checkout process.

4. **Success Page**:
   - Displays a success message after payment.

5. **Failure Page**:
   - Displays a failure message if payment fails.

---

## Cart Functionality

- Cart data is stored in \`localStorage\` to ensure persistence across page refreshes.
- Items added or removed from the cart are synchronized with \`localStorage\`.

---

## Running the Application

1. Start the backend server:
   - Navigate to the \`server\` directory and run:
     \`\`\`bash
     npm start
     \`\`\`

2. Start the frontend development server:
   - Navigate to the \`client\` directory and run:
     \`\`\`bash
     npm start
     \`\`\`

3. Open your browser and navigate to \`http://localhost:3000\`.

---
