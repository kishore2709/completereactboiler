import React from "react";
import Grid from "@material-ui/core/Grid";
import Image from "../assets/images/ComingSoon.jpg";
const ComingSoon = () => {
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={3}>
          <img src={Image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ComingSoon;
