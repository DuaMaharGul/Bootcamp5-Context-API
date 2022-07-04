import React from 'react';
import Child from './Child';

function Parent(props) {
  return (
    <div>
      Parent
      <Child numb = {props.numb}>

      </Child>
    </div>
  );
}

export default Parent;