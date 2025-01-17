# README.md for the backend
cat <<EOL > README.md
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
   git clone <""https://github.com/sandeepkrmehta/Stripe-Checkout-Project/tree/main/server"">
   cd server
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:
   Create a \`.env\` file in the root directory and add:
   \`\`\`env
   MONGO_URI=<your_mongo_connection_string>
   STRIPE_SECRET_KEY=<your_stripe_secret_key>
   PORT=5000
   \`\`\`

4. Start the server:
   \`\`\`bash
   npm start
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

