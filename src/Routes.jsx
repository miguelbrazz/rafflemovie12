import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const MainRoutes = () => {
    return ( 
        <Routes>
            <Route path="/raffle-movies-website/" element={<Home/>}/>
        </Routes>
     );
}
 
export default MainRoutes;