import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "swiper/swiper-bundle.css";
// import "simplebar-react/dist/simplebar.min.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { ModalProvider } from "./context/ModalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ModalProvider>
          <AppWrapper>
            <App />
          </AppWrapper>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
