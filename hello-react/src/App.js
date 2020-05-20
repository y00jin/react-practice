import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      {/* 주석은 이렇게 작성한당*/} <div className="react"> {name} </div>
      // 하지만 이런 주석이나
      <h1> 들여쓰기가 이상해 </h1>
      /* 이런 주석은 페이지에 그래도 나타나게 된당 */
      <input />
    </>
  );
}

export default App;
