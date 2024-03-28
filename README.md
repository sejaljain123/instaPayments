This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# InstaPayments

This project is a web application built using Next.js, TypeScript, Redux, and Chakra UI. It incorporates various features to provide a dynamic and user-friendly shopping experience.

## Features
- **Fetching and Caching Cart Items:** Utilizes Redux to fetch cart items from the backend API and caches them for efficient retrieval and management.
- **Dynamic Total Amount Calculation with Discounts:** Implements dynamic calculations of the total amount, including discounts applied through coupon codes, providing accurate pricing information.
- **Checkout Page with Two Payment Modes:** Includes a checkout page with UPI and card payment modes, along with input field validations for secure payment information entry.
- **Dynamic Theme Switching with Persistent State:** Allows users to switch themes dynamically with persistent state across sessions for a personalized experience.
- **Order Confirmation and Validation Pages:** Guides users through the checkout process with order confirmation and validation pages.
- **Error Handling:** Implements robust error handling mechanisms for smooth user interactions and error display.
- **Custom 404 Page:** Enhances user experience with a custom 404 page for navigation errors.
- **Loading States and Empty Cart Item State:** Provides visual feedback with loading states during data processing and displays a friendly UI when the cart is empty.

## Getting Started
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Technologies Used
- Next.js
- TypeScript
- Redux Toolkit
- Chakra UI
- Node.js

## Folder Structure
- **components:** Contains reusable React components.
- **pages:** Contains Next.js pages for routing and UI rendering.
- **lib:** Includes Redux store configuration, reducers, actions, and middleware.
- **styles:** Contains global styles or theme-related CSS files.
- **utils:** Includes utility functions or helper modules.
- **hooks:** Includes custom hooks to use across the application

## Contributors
- [Sejal Jain](https://github.com/sejaljain123): Project Lead & Developer

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
