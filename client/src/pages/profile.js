import React, { useContext, useEffect, useState } from "react";
import { Context } from "../utils/Store";
import Container from "@material-ui/core/Container";
import API from "../utils/API";

export const Profile = () => {
  const [state, dispatch] = useContext(Context);
  const [profile, setProfile] = useState({});

  const userId = state.user.id;

  useEffect(() => {
    API.getUserInfo(userId).then((profileInfo) => {
      let data = profileInfo.data.data[0];
      console.log(data);
      setProfile(data);
    });
  }, [state]);

  return (
    <Container fluid>
      <h1>Hello, {profile.name.first}</h1>
    </Container>
  );
};
