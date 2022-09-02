import React, { useState} from "react";

function Counter() {
    const [count, setCount] = useState({ x: 0 });
  
    function handleClick() {
      // increment the count
      count.x++;
      // set state with the new count value
    //   setCount(count);
      setCount({ x: count.x + 1 });
      console.log(count)
    }
  
    return <button onClick={handleClick}>{count.x}</button>;
  }

  export default Counter