
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();
  const initialvalues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialvalues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/signin", {
        email: formValues.email,
        password: formValues.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate("/user"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          marginLeft="auto"
          marginRight="auto"
          width="300px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2">SignIn</Typography>
          
          <TextField
            onChange={handleChange}
            value={formValues.email}
            name="email"
            variant="outlined"
            placeholder="Email"
            margin="normal"
          />
          <TextField
            onChange={handleChange}
            value={formValues.password}
            name="password"
            variant="outlined"
            placeholder="Password"
            margin="normal"
          />
          <Button variant="contained" type="submit">
            Signin
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Signin;
