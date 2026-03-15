import {Routes, Route} from "react-router-dom"
import MainPage from "../pages/MainPage.jsx";
import MainLayout from "../layouts/main.layout.jsx";
import QuestionsPage from "../pages/QuestionsPage.jsx";
import ScorePage from "../pages/ScorePage.jsx";
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/:title"} element={<QuestionsPage/>}/>
                    <Route path={"/score"} element={<ScorePage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;