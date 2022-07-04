import React, { useContext } from 'react';
import valueContext from './Value-Context';

function Child() {
    let value = useContext(valueContext);
  return (
    <div>
      Child number {value}
    </div>
  );
}

export default Child;