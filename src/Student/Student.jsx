import React from "react";

const ColorPicker = props => (
  <div>
    {props.students.map(student => (
      <button key={student}>{student}</button>
    ))}
  </div>
);

export default Student;
