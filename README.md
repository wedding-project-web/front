# Wedding Reservation System - Frontend

This project is a frontend application for a wedding reservation system built with React, TypeScript, and Vite.

## How to Run the Project

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm, yarn, or pnpm

### Installation and Setup

1. **Install Dependencies**

   Run the following command in the project root directory:

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn

   # Using pnpm
   pnpm install
   ```

2. **Run Development Server**

   To run the application in development mode:

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev
   ```

   This will start the Vite development server, and you can access the application at `http://localhost:5173` by default.

3. **Build for Production**

   To create a production build:

   ```bash
   # Using npm
   npm run build

   # Using yarn
   yarn build

   # Using pnpm
   pnpm build
   ```

   The built files will be generated in the `dist` directory.

4. **Preview Production Build**

   To preview the production build locally:

   ```bash
   # Using npm
   npm run preview

   # Using yarn
   yarn preview

   # Using pnpm
   pnpm preview
   ```

## Additional Information

- This project is built using React, TypeScript, and Vite.
- Routing is handled through react-router-dom.
- State management uses Recoil.
- API requests are made using React Query and Axios.

---

한국어 설명서는 [README.ko.md](README.ko.md)를 참조하세요.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
