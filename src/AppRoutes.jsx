import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import { AuthContext } from "./contexts/auth";
import {useState} from "react";

const AppRoutes = () => {
    return (
        <Router>
            <AuthContext.Provider value={{authenticated:!!user, user, login, logout}}>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/" element={<HomePage/>} />
                </Routes>
            </AuthContext.Provider>
        </Router>
    )
};

export default AppRoutes;
