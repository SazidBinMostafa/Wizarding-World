import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Main from "./Components/Main/Home/Main";
import ListedBooks from "./Components/Main/ListedBooks/ListedBooks";
import PagesToRead from "./Components/Main/PagesToRead/PagesToRead";
import About from "./Components/Main/About/About";
import ContactUs from "./Components/Main/ContactUs/ContactUs";
import Book from "./Components/Main/Book/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { 
        path: '/',
        element: <Main></Main>,
      },
      {
        path: "/book/:id",
        element: <Book></Book>,
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);