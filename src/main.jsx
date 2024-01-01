// import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Heading";
import Body from "./Body";
import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Country from "./Country";
export let DarkMode = createContext(null);
const App = () => {
  let [darkState, setDarkState] = useState("light");
  // console.log(darkState);
  return (
    <DarkMode.Provider value={darkState}>
      <div className="restCountries">
        <Heading
          dark={(data) => {
            if (data != null && data != darkState) {
              setDarkState(data);
              // console.log(data);
            }
          }}
        />
        <Outlet />
      </div>
    </DarkMode.Provider>
  );
};
let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/country/:countryId",
        element: <Country />,
      },
    ],
  },
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
