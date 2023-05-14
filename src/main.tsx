import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ContextProvider from "./context/ContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
