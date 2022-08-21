import { Button, Grid, Modal, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Donut from "../components/DashboardComponents/Donut";
import MainMenu from "../components/MainMenu";
import Chart from "react-apexcharts";
import { Box } from "@mui/system";

const Dashboard = () => {
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => {
    setModalShow(true);
  };
  const closeModal = () => {
    setModalShow(false);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <MainMenu>
      <Grid container>
        <Grid item xs={12}>
          <Grid item container columnSpacing={5} rowSpacing={6}>
            <Grid item xs={3}>
              <Paper elevation={3}>
                <Grid container>
                  <Grid item xs={6} sx={{ m: "1rem" }}>
                    <b>Total Employees</b>
                  </Grid>
                  <Grid item xs={6} sx={{ m: "1rem" }}>
                    <h1>
                      <b>482</b>
                    </h1>
                  </Grid>
                  <Grid container>
                    <Donut />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3} sx={{ p: "1rem" }}>
                <b>Number of Leave</b>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3} sx={{ p: "1rem" }}>
                <Button variant="text" onClick={openModal}>
                  New Employees
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3} sx={{ p: "1rem" }}>
                <b>Candidates</b>
              </Paper>
            </Grid>
            <Grid container item columnSpacing={5}>
              <Grid item xs={3}>
                <Paper elevation={3} sx={{ p: "1rem" }}>
                  <b>Applications</b>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={3} sx={{ p: "1rem" }}>
                  <b>Interviews</b>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={3} sx={{ p: "1rem" }}>
                  <b>Staff Turnover</b>
                </Paper>
              </Grid>
            </Grid>
            <Grid container item columnSpacing={5}>
              <Grid item xs={6}>
                <Paper elevation={3} sx={{ p: "1rem" }}>
                  <Grid container>
                    <b>Applicants Received Time</b>
                  </Grid>
                  <Grid container>
                    {/* <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="line"
                      width="300"
                    />  */}
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={3} sx={{ p: "1rem" }}>
                  <b>Calendar</b>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Modal
            open={modalShow}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </Grid>
      </Grid>
    </MainMenu>
  );
};

export default Dashboard;
