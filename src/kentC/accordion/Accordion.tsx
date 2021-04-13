import React, { useRef } from "react";
import "./styles.css";

const AccordionViewItem = (props: any) => {
  const ref = useRef(null);

  const clickHandler = () => {
    const elem = ref as any;
    elem.current.classList.toggle("active");
    var panel = elem.current.nextElementSibling;    
    if(!panel.style["display"]){
      panel.style["display"] = "block";
    }
    else {
      panel.style["display"] = "";
    }  
  }
  return (
    <div style={{width: "30%"}}>
      <button ref={ref} className="accordion" onClick={clickHandler}>{props.title}
      <span id="spanny"></span>
      </button>
      <div className="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  )
}

export default AccordionViewItem;
