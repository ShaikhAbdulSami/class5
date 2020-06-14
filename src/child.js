import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
  let value = useContext(ValueContext)
  console.log("value ",value);
  let Updatevalue = value[1];
  return (
    <div>
      Child number {value[0]}
      <button onClick={()=> { Updatevalue(++value[0]) }}> Update value</button>
    </div>
  );
}

export default Child;