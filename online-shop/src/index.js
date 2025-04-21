import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"; // Import Tailwind CSS

const element = <h1 className="bg-emerald-500">Hello, world!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);