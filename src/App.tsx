import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />

        <AppRouter />

        <Footer />
      </Router>
    </>
  );
}

export default App;
