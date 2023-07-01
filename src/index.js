/********************
    
    Assignment 5  Javascript
    Name: Maryam Ayemlo Gambo
    Date:March 3, 2023
    Description:Javascript framework using React

*********************/

import { createRoot } from "react-dom/client";

import App from "./App";

// Render the App component to the div#root in markup.
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
