import { useState } from "react";
import styled from "styled-components";

interface State {
   color: string;
}

const Container = styled.span <State>`
   display: inline-flex;
   align-items: center;
   padding: 4px 12px;
   border: 1px solid #bfc9d9;
   border-radius: 4px;

   h1 {
      background: ${(props) => props.color};
   }

   input[type="color"] {
      border: none;
      margin-right: 8px;
      background: none;
      width: 50px;
      height: 50px;

      
   }

   input[type="text"] {
      border: none;
      font-size: 14px;
   }
`;

interface Val {
   value: string;
   setValue: string;
}

export function ColorPicker({}: Val) {
   const [state, setState] = useState('#FFF');
   const [color, setColor] = useState('#FFF');

   function handleInput(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      )  {
         setState(e.target.value);
         
    };

   return (
      <Container color={color}>
         <input type="color" onChange={(e)=>handleInput(e)} value={state}/>
         <input type="text" value={state} onChange={(e)=>handleInput(e)}/>
         <button onClick={() => setColor(state)}>Aplicar</button>
         <h1>Teste</h1>
      </Container>
   );
}