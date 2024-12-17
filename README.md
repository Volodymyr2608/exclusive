# Exclusive Store Products

Welcome to the **Exclusive Store** repository! This project is a Next.js application showcasing a modern eCommerce store for premium and exclusive products. The project focuses on delivering a high-performance, SEO-friendly, and scalable online store experience.

---

## Features

### Core Features
- **Dynamic Product Listings**: Easily manage and display an extensive range of products.
- **Product Search and Filtering**: Intuitive and fast search with filtering options.
- **Pagination**: Efficient product navigation for better user experience.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **SEO Optimized**: Built with Next.js for server-side rendering and optimized performance.

### Advanced Features
- **Server-Side Rendering (SSR)**: Improves SEO and provides fast initial loading.
- **State Management**: Handles application state with Zustand.
- **Authentication**: Secure user login using NextAuth.js.
- **Backend Integration**: Connects seamlessly to a Nest.js backend with PostgreSQL.
- **Payment Integration**: Ready for payment gateway integrations.

---

## Technologies Used

- **Frontend**:
  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)

- **State Management**:
  - [Zustand](https://zustand-demo.pmnd.rs/)

- **Authentication**:
  - [Supabase](https://supabase.com/)

- **Backend**:
  - [Next.js](https://nextjs.org/)
  - [PostgreSQL](https://www.postgresql.org/)

- **Styling**:
  - Tailwind CSS

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (>= 18.x)
- yarn

### Steps to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Volodymyr2608/exclusive.git
   cd exclusive-store
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and see `example.env` for reference

4. **Run the development server**:
   ```bash
   yarn dev
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Folder Structure

```
exclusive-store/
├── app/                 # Next.js pages
    ├── _components/     # Reusable UI components
    ├── lib/             # Tools files
        ├── utils/               # Utility functions
        ├── hooks/               # Custom hooks
        ├── types/               # Types
    ├── styles/          # Styling files
├── public/              # Static assets
├── package.json         # Project metadata and dependencies
└── ...
```

---

## Available Scripts

### Development
```bash
yarn dev
```
Starts the development server.

### Build
```bash
yarn build
```
Creates a production-ready build.

### Start
```bash
yarn start
```

Starts the production server.

### Lint
```bash
yarn lint
```
Runs code linting checks.

---

## Contributing

We welcome contributions to the Exclusive Store project! To contribute:
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

