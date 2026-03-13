import {Routes, Route} from "react-router-dom"
import MainPage from "../pages/MainPage.jsx";
import MainLayout from "../layouts/main.layout.jsx";
import QuestionsPage from "../pages/QuestionsPage.jsx";
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/:title"} element={<QuestionsPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;