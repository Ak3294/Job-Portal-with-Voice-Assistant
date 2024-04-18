import React, { useState, useEffect } from "react";
function Fetch() {
  const [Fetch, setFetch] = useState(null);
  useEffect(() => {
    fetch("https://linkedin-jobs-scraper-api.p.rapidapi.com/jobs", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "916bf61f44msh14330de52d568c5p12d238jsn5217d43f864e",
        "X-RapidAPI-Host": "linkedin-jobs-scraper-api.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFetch(data[0].Fetch);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>Fetch of the day:</h2>
      {Fetch && <p>{Fetch}</p>}
    </div>
  );
}
export default Fetch;