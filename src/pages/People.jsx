import { Avatar, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import MainMenu from "../components/MainMenu";
import axios from "axios";
// import { makeStyles } from "@mui÷÷÷/material/styles";

// const useStyle = makeStyles(() => ({
//   img1: {
//     height: "200px !important",
//   },
// }));

export const url = "http://localhost:8080/api";
const People = () => {
  // const classes = useStyle();
  const [products, setproducts] = useState([]);
  const call = async () => {
    try {
      const res = await axios.get(url + "/products");
      let dataArr = res.data.data.data;
      console.log("res", dataArr);
      setproducts(dataArr);
    } catch (error) {}
  };
  console.log("products", products);
  useEffect(() => {
    call();
  }, []);

  return (
    <MainMenu>
      <Grid container>
        <Grid item xs={12}>
          <Grid container item spacing={3}>
            {products.map((item, index) => {
              return (
                <Grid item xs={3}>
                  <Paper elevation={3}>
                    <img
                      alt="Remy Sharp"
                      // className={classes.img1}
                      height="250px"
                      src="https://vapestore.pk/wp-content/uploads/2021/12/voopoo-drag-nano-2-carbon-fibre.jpeg"
                    />
                    <Typography>{item.title}</Typography>
                    <Typography>{item.productName}</Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </MainMenu>
  );
};

export default People;
