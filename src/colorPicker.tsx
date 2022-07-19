import { useState } from "react";
import styled from "styled-components";

interface ThemeSelectProps {
   theme: {
      id: string,
      background: string,
      textFundo: string,
      button: string,
      border: string,  
   }
}

const Container = styled.div <ThemeSelectProps>`
   display: flex;
   margin: 2rem;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: ${(props) => props.theme.background};
   gap: 2rem;
   padding: 4rem 2rem;
   border: 1rem solid ${(props) => props.theme.border};
   height: 65vh;

   border-radius: 1rem;

   h1 {
      background: ${(props) => props.theme.button};
      color: ${(props) => props.theme.textFundo};
      padding: 1rem;
      text-align: center;
      margin-left: 2rem;
      border-radius: 25px;
      width: 400px;
      border: 2px solid ${(props) => props.theme.border};
   }

   div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      button {
         width: 4rem;
         height: 4rem;
         border: 0;
         border-radius: 1rem;
      
         &:hover {
            border: 2px solid #2dff03;
         }
      }

      button.themRed {
         background: #ca1515;
      }
      button.themYellow {
         background: #f3d21a;
      }
      button.themPurple {
         background: #8c2ec2;
      }
      button.themCian {
         background: #35d7e2;
      }
   }
   

   button.aplicar {
      padding: 1rem 2rem;
      border-radius: 4rem;
      background: #020202;
      border: 0;
      font-weight: 800;
      font-size: 20px;
      color: #fff;
      transition: background 0.8s;

      &:hover {
         background: #ffffff;
         color: #020202;
      }
   }

`;

interface ThemeProps {
   theme: {
      id: string,
      background: string,
      textFundo: string,
      button: string,
      border: string,  
   },
   setarTheme: (arg0 :string) => void
}

export function ColorPicker({theme, setarTheme }: ThemeProps) {
   const [themeSelect, setThemeSelect] = useState('yellow')
   return (
      <Container theme={theme}>
         <div>
            <button onClick={() => setThemeSelect('red')} className='themRed'></button>
            <button onClick={() => setThemeSelect('yellow')} className='themYellow'></button>
            <button onClick={() => setThemeSelect('purple')} className='themPurple'></button>
            <button onClick={() => setThemeSelect('cian')} className='themCian'></button>
         </div>

         
         <button onClick={() => setarTheme(themeSelect)} className='aplicar'>SET</button>
         <h1>Teste</h1>
         
      </Container>
   );
}