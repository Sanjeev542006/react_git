import { Button } from "@mui/material";
import React from "react"
import { useNavigate } from "react-router-dom";
import Home from "../Home/Home";
// import Button from "@mui/material";
const Login = ()=>{
    const navigate = useNavigate();
    const HandleHome=()=>{
        // useNavigate()
        navigate("./Home")
    }
    return(
        <center>
        <form >
            <h1>Welcome to Login</h1>
        <label>UserName:</label>
        <input type="text"></input>
        <br/>
        <br/>
        <label>Password: </label>
        <input type="password"></input>
        </form>
        <br/>
        <Button variant="contained" color="success"  onClick={HandleHome}>
      Login
    </Button>
        </center>
    )
}
export default Login;