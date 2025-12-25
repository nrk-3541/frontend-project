# 🚀 Vite + React + TailwindCSS + ShadCN/UI Boilerplate

This repository provides a boilerplate for setting up a modern frontend development environment using Vite, React, TailwindCSS, and ShadCN/UI components. It's designed to help you kickstart your projects with a clean and efficient setup.

---

## 📦 Features

* **Vite**: Blazing fast build tool for modern web projects.
* **React**: Library for building user interfaces.
* **TailwindCSS**: Utility-first CSS framework for rapid UI development.
* **ShadCN/UI**: Beautifully designed and accessible UI components.
* **ESLint**: Pluggable linting utility for JavaScript and JSX.
* **Prettier**: Opinionated code formatter.([github.com][1], [github.com][2], [github.com][3])

---

## 🛠️ Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/en/) (v14 or higher)
* [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aniruddhabagal/vite-react-shadcn.git
   cd vite-react-shadcn
   ```



2. **Install dependencies:**

   ```bash
   npm install
   ```



3. **Start the development server:**

   ```bash
   npm run dev
   ```



Your application will be available at `http://localhost:5173/`.

---

## 📁 Project Structure

```bash
vite-react-shadcn/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # Reusable components
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Entry point
├── components.json         # ShadCN/UI configuration
├── index.html              # HTML template
├── package.json            # Project metadata and scripts
├── tailwind.config.js      # TailwindCSS configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```



---

## 📄 Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint to analyze code           |
| `npm run format`  | Format code using Prettier           |

---

## 🎨 Customization

* **TailwindCSS**: Modify `tailwind.config.js` to customize your design system.
* **ShadCN/UI**: Configure components in `components.json` as per your requirements.([github.com][3], [shadcn-marketplace.vercel.app][5])

---

## 📚 Resources

* [Vite Documentation](https://vitejs.dev/)
* [React Documentation](https://reactjs.org/)
* [TailwindCSS Documentation](https://tailwindcss.com/)
* [ShadCN/UI Documentation](https://ui.shadcn.com/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
