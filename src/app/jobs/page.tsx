import axios from "axios";
import React from "react";

export default function Jobs() {
  const jobs = async () => {
    try {
      const response = await axios.get("http://localhost:8888/api/job");

      console.log(response);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  };

  return <div>Jobs</div>;
}
