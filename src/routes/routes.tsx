import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Dashboard />} />

                <Route path="about" element={ <About /> } />

                <Route path="contact" element={ <Contact /> } />
            </Routes>
        </BrowserRouter>
    )
}