import React, { useState } from "react";
import "./loginform.css";

const LoginForm = () => {

    const userList = [
        {
          "username": "johndoe",
          "password": "JD1234!"               
        },
        {
          "username": "janedoe",
          "password": "Jane@Doe456"
        },
        {
          "username": "bobsmith",
          "password": "B0bsm!th789"
        },
        {
          "username": "sarahjones",
          "password": "Sarah#J0nes101"
        }
      ]

    const [currentUser, setcurrentUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let username = e.target.usrname.value;
        let password = e.target.pwd.value;
        console.log(`${username}:${password}`);
        setcurrentUser({"username": username, "password": password});
        let checkUser = userList.find((user) => (user.username === username && user.password===password));
        checkUser ? console.log("User Authentificated") : console.log("User Does Not Exist");
    }

    return (
        <form className="form-inner" onSubmit={handleSubmit}>
                {Object.keys(currentUser).length !== 0 && <p>{currentUser.username}</p> }
                <h2>Login</h2>
                <div className="form-groop">
                    <label htmlFor="username">username:</label>
                    <input type="text" id="usrname"/>
                </div>
                <button></button>
                <div className="form-groop">
                    <label htmlFor="password">password:</label>
                    <input type="password" id="pwd"/>
                </div>
                <button type="submit">LOGIN</button>
        </form>
    )
}

export default LoginForm