// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      {isLoaded ? <img src={dogImage} alt="A Random Dog" /> : <p>Loading...</p>}
    </>
  );
}

export default App;
