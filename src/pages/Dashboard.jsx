import {
  Button,
  Grid,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Donut from "../components/DashboardComponents/Donut";
import MainMenu from "../components/MainMenu";
import { Box } from "@mui/system";
import Graph from "../components/DashboardComponents/Graph";
import axios from "axios";
import { url } from "./People";

const Dashboard = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "black",
  };
  // open close modal
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => {
    setModalShow(true);
  };
  const closeModal = () => {
    setModalShow(false);
  };

  // input state change
  const [addProduct, setAddProduct] = useState({ title: "", productName: "" });
  const handlechangetitle = (e) => {
    const { value } = e.target;
    setAddProduct({ ...addProduct, title: value });
  };
  const handlechangeproduct = (e) => {
    const { value } = e.target;
    setAddProduct({ ...addProduct, productName: value });
  };

  const response = async () => {
    try {
      const result = await axios.post(
        url,
        {
          title: addProduct.title,
          productName: addProduct.productName,
        },
        (res) => {
          console.log("res", res);
        }
      );
    } catch (error) {}
  };
  return (
    <MainMenu>
      <Grid container>
        <Grid item xs={12}>
          <Grid item container columnSpacing={5} rowSpacing={6}>
            <Grid item xs={3}>
              <Paper elevation={3}>
                <Stack spacing={2} sx={{ p: "1rem" }}>
                  <Typography variant="h6">Total Employees</Typography>
                  <Typography variant="h6">482</Typography>
                  <Donut />
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3}>
                <Stack spacing={2} sx={{ p: "1rem" }}>
                  <Typography variant="h6">Number of Leaves</Typography>
                  <Typography variant="h6">482</Typography>
                  <Donut />
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3}>
                <Stack spacing={2} sx={{ p: "1rem" }}>
                  <Button variant="text" onClick={openModal}>
                    <Typography variant="h6">Add new products</Typography>
                  </Button>
                  <Donut />
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3}>
                <Stack spacing={2} sx={{ p: "1rem" }}>
                  <Typography variant="h6">Certifications</Typography>
                  <Typography variant="h6">482</Typography>
                  <Donut />
                </Stack>
              </Paper>
            </Grid>
            <Grid container item columnSpacing={5}>
              <Grid item xs={3}>
                <Paper elevation={3}>
                  <Stack spacing={2} sx={{ p: "1rem" }}>
                    <Typography variant="h6">Discovery</Typography>

                    <Donut />
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={3}>
                  <Stack spacing={2} sx={{ p: "1rem" }}>
                    <Typography variant="h6">Reports</Typography>

                    <Donut />
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={3}>
                  <Stack spacing={2} sx={{ p: "1rem" }}>
                    <Typography variant="h6">License</Typography>
                    <Donut />
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
            <Grid container item columnSpacing={5}>
              <Grid item xs={6}>
                <Paper elevation={3} sx={{ pb: "2.2rem" }}>
                  <Stack spacing={3} sx={{ p: "1rem" }}>
                    <Typography variant="h6">
                      Application Received Time
                    </Typography>
                    <Donut />
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={3}>
                  <Stack spacing={2} sx={{ p: "1rem" }}>
                    <Typography variant="h6">Calendar</Typography>
                    <Graph />
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Modal
            open={modalShow}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ color: "black" }}
              >
                Add New Employee
              </Typography>
              <Stack spacing={3}>
                <TextField
                  id="standard-basic"
                  label="Title"
                  onChange={handlechangetitle}
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Product name"
                  onChange={handlechangeproduct}
                  variant="standard"
                />
                <Button variant="contained" onClick={response}>
                  Submit
                </Button>
              </Stack>
            </Box>
          </Modal>
        </Grid>
      </Grid>
    </MainMenu>
  );
};

export default Dashboard;
