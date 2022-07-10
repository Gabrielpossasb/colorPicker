import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './stylesApp';

const api = `https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=6`;



export function App() {  
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axios.get(api)
      .then(response => {
        let cores = response.data.colors;

        cores = cores.map(({hex}: {hex: string[];}) => {
          return hex;
        })
        setColors(cores)
        console.log(cores)
      })
      .catch(error => console.error(error))
  }, [])

  function getColors() {
    
  }

  return (
    <Container>
      <button
        onClick={() => getColors()}
      >
        apiGet
     </button>
    
  
   
    
    </Container>
  );
}
