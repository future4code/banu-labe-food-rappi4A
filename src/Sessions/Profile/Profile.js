import React, { useContext, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/Url";
import GlobalStateContext from "../../Context/GlobalStateContext";
import { goToEdit, goToEditAddress } from "../../Router/Coordinate";

import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const { profileList, setProfileList } = useContext(GlobalStateContext);

  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    getProfile();
  }, [profileList]);

  const getProfile = () => {
    axios
      .get(`${BASE_URL}/profile`, headers)
      .then((res) => {
        setProfileList(res.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>oi, sou o Profile</h1>
      <p>{profileList.name}</p>
      <p>{profileList.email}</p>
      <p>{profileList.cpf}</p>
      <p>{profileList.address}</p>
      <button
        onClick={() => {
          goToEdit(history);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          goToEditAddress(history);
        }}
      >
        Editar Endereço
      </button>
    </div>
  );
};

export default Profile;
