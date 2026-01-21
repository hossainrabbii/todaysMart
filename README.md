# Today's Mart

[Live Site](https://todays-mart.vercel.app/)

Today's Mart is a modern e-commerce web application built with **Next.js**. It allows users to browse products, manage a shopping cart, and experience dynamic features like flash sales. The platform includes user authentication and full CRUD operations for products.

---

## Features

- **User Authentication**: Secure login and registration system.
- **CRUD Products**: Add, edit, delete, and view products.
- **Shopping Cart**: Add products to the cart and manage quantities.
- **Flash Sale Section**: Time-limited discounts with countdown timer.
- **Responsive Design**: Works seamlessly on mobile and desktop devices.
- **Next.js Powered**: Server-side rendering for fast performance.

---

## Tech Stack

- **Frontend & Backend**: Next.js (React + Node.js)
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Authentication**: JWT / NextAuth
- **Deployment**: Vercel

---

## Installation

1. **Clone the repository**

```bash
git clone <your-repo-link>
cd todays-mart

npm install
# or
yarn install

NEXT_PUBLIC_BASE_API=<your-base-api>

NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY=<your-client-key>
NEXT_PUBLIC_RECAPTCHA_SERVER_KEY=<your-server-key>


npm run dev
# or
yarn dev
