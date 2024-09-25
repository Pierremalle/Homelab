import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./components/global/DarkModeProvider";

import { Outlet } from "react-router-dom";
import { SideBar } from "./components/global/SideBar";

import { HomePage } from "./components/pages/HomePage";
import { NotFoundPage } from "./components/pages/NotFoundPage";

const routesLinks = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Projects",
    url: "/projects",
  },
  {
    id: 3,
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    name: "NotFound",
    url: "/404",
  },
];

function App() {
  return (
    <DarkModeProvider>
      <div className="md:flex w-screen">
        <SideBar routesLinks={routesLinks} />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/home"
              element={
                <>
                  <HomePage />
                  <Outlet />
                </>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </DarkModeProvider>
  );
}

export default App;
