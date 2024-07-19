import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./contexts/searchResult.context.tsx";
import { GenresProvider } from "./contexts/genres.context.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <SearchProvider>
        <GenresProvider>
            <App />
        </GenresProvider>
      </SearchProvider>
    </BrowserRouter>
);
