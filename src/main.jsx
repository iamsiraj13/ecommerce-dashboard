import React, { Fragment, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <Suspense fallback={<h2>Loading....</h2>}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
          <Toaster
            toastOptions={{
              position: "top-right",
              style: {
                background: "#283046",
                color: "white",
              },
            }}
          />
        </Provider>
      </BrowserRouter>
    </Suspense>
  </Fragment>
);
