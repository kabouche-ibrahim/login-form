import React from "react";
import "./loginform.css";

const LoginForm = () => {
    return (
        <form>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-groop">
                    <label htmlFor="username">username:</label>
                    <input type="text" />
                </div>

                <div className="form-groop">
                    <label htmlFor="password">password:</label>
                    <input type="text" />
                </div>
                <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm