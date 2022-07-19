import React, { useEffect, useState } from 'react';
import { ColorPicker } from './colorPicker';


export function AppColor() {  
   const themes = 
   [
   {
      id: 'red',
      background: '#412828',
      textFundo:'#8b0d0d',
      button:'#c72e2e',
      border: '#862f2f',     
   },
   {
      id: 'cian',
      background: '#102d36',
      textFundo:'#7ea7aa',
      button:'#155d63',
      border: '#62afb4',
   },
   {
      id: 'purple',
      background: '#3c1f53',
      textFundo:'#4c166b',
      button:'#8c2ec2',
      border: '#a354c2',
   },
   {
      id: 'yellow',
      background: '#45490e',
      textFundo:'#dfe22b',
      button:'#b19b21',
      border: '#cbce14',
   },
];

const [theme, setTheme] = useState({
   id: 'purple',
   background: '#3c1f53',
   textFundo:'#4c166b',
   button:'#8c2ec2',
   border: '#a354c2',
})


function handleSetTheme(e: string) {
   let newTheme = themes.filter((val) => {
      return val.id === e;
   });
   setTheme(newTheme[0])
   console.log(newTheme[0])
}


return (
   <div>
      <ColorPicker theme={theme} setarTheme={(e) => handleSetTheme(e)} />
   </div>
);
}