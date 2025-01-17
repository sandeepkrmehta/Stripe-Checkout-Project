

# Backend README.md 
cat <<EOL > server/README.md
# Stripe Checkout Backend

This is the backend of a simple e-commerce platform built with Node.js, Express, MongoDB, and Stripe. It supports mock product data, cart management, and Stripe payment integration.

## Features

- Fetch mock product data.
- Handle cart and checkout operations.
- Integrate with Stripe for payment processing.
- Save order details in the MongoDB database.

## Technologies

- Node.js
- Express.js
- MongoDB
- Stripe API
- dotenv (Environment variables)

---

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone <https://github.com/sandeepkrmehta/Stripe-Checkout-Project/tree/main/client>
   cd server
   \`\`\`

2. Install dependencies:
   \`\`\`
   
   npm install

   \`\`\`

4. Set up environment variables:
   Create a \`.env\` file in the root directory and add:
   \`\`\`env
   MONGO_URI=<your_mongo_connection_string>
   
   STRIPE_SECRET_KEY=<your_stripe_secret_key>

   PORT=5000

   \`\`\`

6. Start the server:
   \`\`\`

node app.js

   \`\`\`

---

## API Endpoints

### 1. **Get Products**
   - **URL:** \`/api/products\`
   - **Method:** \`GET\`
   - **Description:** Fetches the list of mock products.

### 2. **Checkout**
   - **URL:** \`/api/checkout\`
   - **Method:** \`POST\`
   - **Description:** Initiates a Stripe checkout session.
   - **Request Body:**
     \`\`\`json
     {
       "email": "user@example.com",
       "items": [
         { "name": "Product A", "price": 2000 },
         { "name": "Product B", "price": 3000 }
       ]
     }
     \`\`\`
   - **Response:**
     \`\`\`json
     {
       "url": "https://checkout.stripe.com/session_url"
     }
     \`\`\`

---

## Database Schema

### **Order Model**
\`\`\`javascript
{
  email: String,
  items: Array,
  total: Number,
  status: String, // 'pending', 'completed', or 'failed'
  createdAt: Date
}
\`\`\`

---

## Stripe Integration

- **Success URL:** \`http://localhost:3000/success\`
- **Cancel URL:** \`http://localhost:3000/failure\`

---

## License

This project is open-source and free to use.
EOL

echo "Backend README.md created successfully in the server directory."

# Frontend README.md 
cat <<EOL > client/README.md
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
   git clone <"https://github.com/sandeepkrmehta/Stripe-Checkout-Project/tree/main/client">
   
   cd client
   \`\`\`

3. Install dependencies:
   \`\`\`
   
   npm install
   
   \`\`\`

5. Set up environment variables:
   Create a \`.env\` file in the root directory and add:
   \`\`\`env
   
   REACT_APP_API_URL=http://localhost:5000/api

   \`\`\`

7. Start the development server:
   \`\`\`
   
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
     \`\`\`
     
     npm start

     \`\`\`

2. Start the frontend development server:
   - Navigate to the \`client\` directory and run:
     \`\`\`
     
     npm start

     \`\`\`

3. Open your browser and navigate to \`http://localhost:3000\`.

---
