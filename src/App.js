import React from "react";
import { ROUTER } from "./router";
import { RouterProvider } from "react-router-dom";
import { UserContext } from "./ContextPage/UserContext";

function App() {
  return (
    <UserContext>
      <RouterProvider router={ROUTER} />
    </UserContext>
  );
}

export default App;
