import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password});
        login(email, password);
    };

    return (
        <div id="login">
            <div className="container">
                <h1 className="title text-center mt-3">Login do sistema</h1>
                <p>{String(authenticated)}</p>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="field form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" name="email" id="email" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="field form-group mb-3">
                        <label htmlFor="password">Senha</label>
                        <input className="form-control" type="password" name="password" id="password" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="actions form-group mb-3">
                        <button className="btn btn-outline-primary" type="submit">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
