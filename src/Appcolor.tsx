import React, { useEffect, useState } from 'react';
import { ColorPicker } from './colorPicker';

interface Val {
   value: string;
   onChange: any;
   e: string;
}

export function AppColor({}:Val) {  
 

  return (
      <div>
      <ColorPicker value={''} setValue={''}/>
      </div>
  );
}