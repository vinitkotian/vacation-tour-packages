import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import TourPackages from "../tour-packages";
const useStyles = makeStyles({
  mainBox: {
    display: "flex",
    height: "90%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    marginTop: "2rem",
    fontWeight: "600",
  },
  underline: {
    marginTop: "1rem",
    height: "0.3rem",
    width: "5rem",
    background: "black",
  },
});

export function MainContainer(props) {
  const classes = useStyles();
  return (
    <>
      <main className={classes.mainBox}>
        <Typography variant="h4" className={classes.headingText}>
          {props.tourDetails.length > 0
            ? "Explore Packages"
            : "Please refresh to revisit the packages."}
        </Typography>
        <div className={classes.underline}></div>
        <TourPackages
          tourDetails={props.tourDetails}
          removeTour={props.removeTour}
        />
      </main>
    </>
  );
}
