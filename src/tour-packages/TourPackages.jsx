import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  paperBackdrop: {
    height: 800,
    width: 800,
    margin: "2rem",
    borderRadius: "1rem",
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    justifyItems: "center",
  },
  image: {
    width: "100%",
    height: "30rem",
    objectFit: "cover",
    borderTopLeftRadius: "1rem",
    borderTopRightRadius: "1rem",
  },
  tourTitle: {
    marginTop: 10,
  },
  tourDetailsBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  removeTourButton: {
    width: 300,
    marginBottom: 0,
  },
  tourInfo: {
    margin: 20,
  },
});
export function TourPackages(props) {
  const tourDetails = props.tourDetails;
  const classes = useStyles();
  const removeTour = props.removeTour;
  return (
    <>
      {tourDetails.map((tour) => {
        return (
          <Paper className={classes.paperBackdrop} elevation={12} key={tour.id}>
            <img src={tour.image} className={classes.image} />
            <Box className={classes.tourDetailsBox}>
              <Typography variant="h5" className={classes.tourTitle}>
                {tour.name}
              </Typography>
              <Typography variant="body1" className={classes.tourInfo}>
                {tour.info}
              </Typography>
              <Button
                classes={{ root: classes.removeTourButton }}
                variant="outlined"
                color="primary"
                onClick={() => {
                  removeTour(tour.id);
                }}
              >
                Not Interested
              </Button>
            </Box>
          </Paper>
        );
      })}
    </>
  );
}
