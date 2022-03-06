import { ToastContainer } from "react-toastify";
import Routes from "./Routes";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./Styles/global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
    </div>
  );
}

export default App;
