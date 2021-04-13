import React, { useRef } from "react";
import "./styles.css";

const AccordionViewItemContent = (props: any) => {
  return (
    <div className="panel">
      {props.children}
    </div>
  )
}

const AccordionViewItem = (props: any) => {
  const ref = useRef(null);

  const clickHandler = () => {
    const elem = ref as any;
    elem.current.classList.toggle("active");
    var panel = elem.current.nextElementSibling;
    if (!panel.style["display"]) {
      panel.style["display"] = "block";
    }
    else {
      panel.style["display"] = "";
    }
  }
  return (
    <div style={{ width: "30%" }}>
      <button ref={ref} className="accordion" onClick={clickHandler}>{props.title}
        <span id="spanny"></span>
      </button>
      <AccordionViewItemContent>
        {props.children}
      </AccordionViewItemContent>
    </div>
  )
}

export default AccordionViewItem;
