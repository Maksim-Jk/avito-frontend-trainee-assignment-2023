import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },

});
const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "light",
  },
});


const theme = darkTheme;

document.body.style.backgroundColor = theme.palette.background.default;


ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
);
