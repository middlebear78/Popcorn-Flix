import { Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
const Routing: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/landing" element={<LandingPage />} />
                {/* // <Routh path="/" element={<HomeScreen />} /> */}
            </Routes>
        </div>
    );
};

export default Routing;
