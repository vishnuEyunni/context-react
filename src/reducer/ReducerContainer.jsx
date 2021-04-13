import React from "react";

const ReducerContainer = (props) => {
  const { data } = props;
  const { count } = data;
  const onClickHandler = (e) => {
    alert(1);
    debugger;
    console.log("data: ", data);
    props.setState({ type: "Square" })
  }

  return (
    <>
      {props.children({
        alertDialog: onClickHandler
      })}
      <div>
        Count is : {count}
      </div>
    </>
  )
}

export default ReducerContainer;
