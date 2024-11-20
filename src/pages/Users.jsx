import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import UserService from "../services/UserService";
import Layaout from "../components/Layout";
import axiosClient from "../utils/axiosClient.js";


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert, Button } from "@mui/material";
import { NavLink } from "react-router-dom";


const service = new UserService(axiosClient);
function Users() {

  const [data, setData] = useState([]);

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");




  const fetchData = () => {
    service.list()
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        setAlert(true);
        setAlertMessage(error.response?.data.message || error.message);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = (id) => {
    service.delete(id)
      .then((response) => {
        fetchData();
      })
      .catch((error) => {
        setAlert(true);
        setAlertMessage(error.response?.data.message || error.message);
      });
  }
  return (
    <Layaout>
      <div>

        <h1
          className="text-2xl font-bold mb-4"
        >
          Lista de Usuarios
        </h1>




        <div
          className="flex justify-end"
        >
          <Button variant="contained">
            <NavLink
              to="/users/create">Nuevo Usuario
            </NavLink>
          </Button>
        </div>

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

          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Tipo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((user) => {
                  return (
                    <tr
                      className="border-b border-gray-200 hover:bg-gray-100 text-center "
                      key={user.id}
                    >
                      <td className="px-4 py-3" >{user.id}</td>
                      <td className="px-4 py-3">{user.name}</td>
                      <td className="px-4 py-3">{user.email}</td>
                      <td className="px-4 py-3">{user.type}</td>
                      <td className="px-4 py-3">
                        <label
                          className="mr-2 text-sm text-blue-500 py-1 px-2"
                        >
                          <NavLink to={`/users/${user.id}/edit`}>
                            <EditIcon />
                          </NavLink>

                        </label>
                        <label
                          onClick={() => deleteItem(user.id)}
                          className="text-sm text-red-500 py-1 px-2 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                        >
                          <DeleteIcon />
                        </label>
                      </td>
                    </tr>
                  );
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </Layaout>
  );
}

export default Users;
