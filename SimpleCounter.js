import React, { useState } from "react";

function SimpleCounter() {
  const [num, setNum] = useState(0);
  function clickUp() {
    setNum(num + 1);
  }
  

  function clickUpBy2() {
    setNum(num + 1);
    setNum(num + 1);
  }
  // you need to be careful here because the first setNum function is starting to run WHILE the second setNum begins, so when the second setNum function begins, it is using the CURRENT value of num, which is still 0 because the first setNum function has not finished running yet

  // const clickUpBy2 = () {
  //   setNum(n=> n+1);
  //   setNum(n=>n+1);
  // }
  // the correct way to do it

  return (
    <div>
      <h3>Count: {num}</h3>
      <button onClick={clickUp}>Up</button>
      <button onClick={clickUpBy2}>Up By 2</button>
    </div>
  );
}

export default SimpleCounter;
