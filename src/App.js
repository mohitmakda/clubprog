import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Hackweek } from "./components/Hackweek";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { RegisterPage } from "./components/RegisterPage";
import { BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path ="/" element={
          <>
          {/* <NavBar /> */}
          <Banner />
          <Skills />
          <Projects />
          <Hackweek />
          <Footer />
         </>
        }>
        </Route>
          <Route
            path="/login.js"
            element={
              <Login/>
            }
            ></Route>
            
          <Route
            path="/RegisterPage"
            element={
              <RegisterPage/>
            }
            ></Route>
       </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
