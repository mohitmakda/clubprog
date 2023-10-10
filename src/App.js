import logo from './logo.svg';
import './App.css';
// import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { DashBoardNav } from './components/DashBoardNav';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { UpcommingEvents } from "./components/UpcommingEvents";
import { Hackweek } from "./components/Hackweek";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { RegisterPage } from "./components/RegisterPage";
import { Dashboard } from './components/Dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Banner />
                <Skills />
                <Projects />
                <UpcommingEvents/>
                <Hackweek />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <><NavBar />
              <Login />
              </>
            }
          />
          <Route
            path="/RegisterPage"
            element={
              <><NavBar />
              <RegisterPage />
              </>
            }
          />
          <Route path="/Dashboard" // Corrected path
            element={
            <>
              <DashBoardNav/>
              <Dashboard />
            </>
            }
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
