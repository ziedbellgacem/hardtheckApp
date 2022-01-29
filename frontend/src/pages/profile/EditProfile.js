import "./editProfile.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { editUser } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function EditProfile() {
  const userEdit = useSelector((state) => state.authReducer.user);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handelChange
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // handelSubmit
  const handelSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("firstname", userEdit.firstname);
    data.append("lastname", userEdit.lastname);
    data.append("email", userEdit.email);
    data.append("password", userEdit.password);
    data.append("myPhoto", file);
    dispatch(editUser(data, navigate));
  };
  useEffect(() => {
    setFormData({
      firstname: userEdit.firstname,
      lastname: userEdit.lastname,
      email: userEdit.email,
      password: userEdit.password,
    });
  }, [
    userEdit.firstname,
    userEdit.lastname,
    userEdit.email,
    userEdit.password,
  ]);

  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="cont">
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: "url(https://source.unsplash.com/random)",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Edit Profile
                </Typography>
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 1 }}
                  onSubmit={handelSubmit}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={formData.firstname}
                    id="firstname"
                    label="First Name"
                    name="firstname"
                    autoComplete="firstname"
                    autoFocus
                    onChange={handelChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={formData.lastname}
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="lastname"
                    autoFocus
                    onChange={handelChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={formData.email}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handelChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={formData.password}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handelChange}
                  />
                  <Form.Label>Picture</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Edit
                  </Button>
                  <Grid container></Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
      <Footer />
    </div>
  );
}
