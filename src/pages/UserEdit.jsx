import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/UserService";
import axiosClient from "../utils/axiosClient";

import { Alert, Button, TextField } from "@mui/material";
import InputPasswordMui from "../components/InputPasswordMui";
import Layaout from "../components/Layout";



const service = new UserService(axiosClient);
export function userLoader({ params }) {
  const user = {
    id: params.userId,
    name: "teste",
    email: "teste@gmail.com",
  };

  return { user };
}


function EditUser() {
  // const { user } = useLoaderData();
  const { userId } = useParams();
  const [data, setData] = useState(null);

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const fetchData = () => {
    service.get(userId)
      .then((response) => {
        const data = response.data;
        setData(data);
      }).catch((error) => {
        setAlert(true);
        setAlertMessage(error.response?.data.message || error.message);
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    service.update(userId, data)
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layaout>
      <div>
        <p></p>
        <p
          className="text-2xl"
        >Editar Usuario
        </p>

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
          {
            data && (
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
                    defaultValue={data.name}
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
                    defaultValue={data.email}
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
                    defaultValue={data.type}
                    onChange={(e) => setData({ ...data, type: e.target.value })}
                    variant="outlined"
                  />
                </div>
                <div
                  className="mb-2"
                >
                  <InputPasswordMui
                    placeholder="Nueva Contraseña"
                    setValue={(value) => setData({ ...data, password: value })}
                  />
                </div>


                <div>
                  <Button
                    type="submit"
                    sx={{ width: 300 }}
                    variant="contained"
                  >
                    Guardar
                  </Button>

                </div>
              </form>
            )
          }

        </div>
      </div>
    </Layaout>
  );
}

export default EditUser;
