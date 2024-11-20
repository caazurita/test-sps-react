//MUI
import { Alert, Button, TextField } from "@mui/material";

//React
import { useState } from "react";

//Services and Conponents
import AuthService from "../services/AuthService.js";
import axiosClient from "../utils/axiosClient.js";
import storage from "../storage/storage";
import InputPasswordMui from "../components/InputPasswordMui";

var credentials = {
  email: "",
  password: "",
}
const service = new AuthService(axiosClient);
const Pages = () => {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

 
  const handleSubmit = (event) => {
    event.preventDefault();

    service.login(credentials)
      .then((response) => {
        console.log(response);
        storage.set("access_token", response.accessToken);
        storage.set("user", response.user);
        window.location.href = "/";

      }).catch((error) => {
        setAlert(true);
        setAlertMessage(error.response?.data.message || error.message);
      });

  };


  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
    >
      {
        alert &&
        <Alert
          sx={{ width: 300 }}
          severity="error"
        >
          {alertMessage}
        </Alert>
      }
      <h1
        className="text-4xl font-bold text-center"
      >Login</h1>
      <form
        onSubmit={handleSubmit}
      >
        <div
          className="mb-2 mt-2"
        >
          <TextField
            type="email"
            sx={{ width: 300 }}
            size="small"
            label="Email"
            variant="outlined"
            required
            onChange={(e) => (credentials.email = e.target.value)}
          />
        </div>

        <div
          className="mb-2"
        >
          <InputPasswordMui
            placeholder="Contraseña"
            setValue={(value) => (credentials.password = value)}
          />
        </div>


        <div>
          <Button
            type="submit"
            sx={{ width: 300 }}
            variant="contained"
          >
            Entrar
          </Button>

        </div>
      </form>
    </div>
  );
}

export default Pages;
