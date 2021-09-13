import { CircularProgress, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MainContainer from "../main-container";

const toursApiUrl = "https://course-api.com/react-tours-project";

const useStyles = makeStyles({
  loadingSpinner: {
    margin: "50vh 48vw auto",
  },
});

export function LoadComponent() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [tourDetails, setTourDetails] = useState([]);

  const fetchTourDetails = () => {
    fetch(toursApiUrl)
      .then((response) => {
        response.json().then((body) => {
          console.log(body);
          setTourDetails(body);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTourDetails();
  }, []);

  const removeTour = (tourId) => {
    var updatedTours = tourDetails.filter((tour) => tour.id !== tourId);
    setTourDetails(updatedTours);
  };

  if (loading) {
    return (
      <CircularProgress color="inherit" className={classes.loadingSpinner} />
    );
  } else {
    return <MainContainer tourDetails={tourDetails} removeTour={removeTour} />;
  }
}
