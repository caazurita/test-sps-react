import React, { useState } from "react";
import UserService from "../services/UserService";
import axiosClient from "../utils/axiosClient";

import { Alert, Button, TextField } from "@mui/material";
import InputPasswordMui from "../components/InputPasswordMui";
import Layaout from "../components/Layout";



const service = new UserService(axiosClient);



function UserCreate() {
  const [data, setData] = useState({
    name: "",
    email: "",
    type: "",
    password: "",
  });

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (event) => {
    setAlert(false);
    event.preventDefault();
    service.create(data)
      .then((response) => {
        const success = response.success;
        if (!success) {
          setAlert(true);
          setAlertMessage(response.message);
        }
        window.location.href = "/users";
      }).catch((error) => {
        setAlert(true);
        setAlertMessage(error.response?.data.message || error.message);
      })
  }

  return (
    <Layaout>
      <div>
        <p
          className="text-2xl"
        >Novo de Usuário</p>
        <div>
          {
            alert &&
            <Alert
              sx={{ width: 300 }}
              severity="error"
            >
              {alertMessage}
            </Alert>
          }

          <form
            onSubmit={handleSubmit}
          >
            <div
              className="mb-2 mt-2"
            >
              <TextField
                type="text"
                sx={{ width: 300 }}
                size="small"
                label="Nombre"
                required
                onChange={(e) => setData({ ...data, name: e.target.value })}
                variant="outlined"
              />
            </div>
            <div
              className="mb-2 mt-2"
            >
              <TextField
                type="email"
                sx={{ width: 300 }}
                size="small"
                label="Email"
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
                variant="outlined"
              />
            </div>

            <div
              className="mb-2 mt-2"
            >
              <TextField
                type="text"
                sx={{ width: 300 }}
                size="small"
                label="Tipo"
                required
                onChange={(e) => setData({ ...data, type: e.target.value })}
                variant="outlined"
              />
            </div>

            <div
              className="mb-2"
            >
              <InputPasswordMui
                placeholder="Contraseña"
                setValue={(value) => setData({ ...data, password: value })}
              />
            </div>


            <div>
              <Button
                type="submit"
                sx={{ width: 300 }}
                variant="contained"
              >
                Salvar
              </Button>

            </div>
          </form>



        </div>
      </div>
    </Layaout>
  );
}

export default UserCreate;
