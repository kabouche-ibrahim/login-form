import React, { useState } from "react";
import "./loginform.css";
import logo from "./cnr.png";
import passwordIcon from "./password.png";
import userIcon from "./user.png"

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
                <h2><img src={logo} width={60} height={50} /></h2>
                <div className="form-groop">
                    <input type="text" id="usrname" placeholder="Nom d'utilisateur"/>
                </div>
                <button></button>
                <div className="form-groop">
                    <input type="password" id="pwd" placeholder="Mot de passe"/>
                </div>
                <button type="submit">Connexion</button>
        </form>
    )
}

export default LoginForm
