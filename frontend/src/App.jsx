import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import UnderDevelopment from "./pages/under-development/UnderDevelopment";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<UnderDevelopment />} />
                    <Route path="/videos" element={<UnderDevelopment />} />
                    <Route path="/database" element={<UnderDevelopment />} />
                    <Route path="/learn" element={<UnderDevelopment />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
