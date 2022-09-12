import React from "react";

function GetSolution({ questions }) {
  
  return (
    <>
      {questions.map((question) => (
        <div key={question.id}>
          <div style={{ color: "white", fontSize: 20 }}>
           {question.id}: {question.text}
          </div>
          <br></br>
          <div style={{ color: "white", fontSize: 20 }}>
           Ans: {question.answer}
          </div>
          <hr></hr>
        </div>
      ))}
    </>
  );
}

export default GetSolution;
