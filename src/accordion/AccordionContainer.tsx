import React, { HTMLProps } from "react";
import AccordionViewItem from "./AccordionViewItem";

interface IHeaderProps extends HTMLProps<any> {
  ariaLevel?: number | null;
  role?: any;
}

interface ITriggerProps extends HTMLProps<any> {
  index?: number;
  role?: any;
  tabIndex?: any;
}

interface IPanelProps extends HTMLProps<any> {
  index?: number;
  role?: any;
}

export interface IUseAccordionPropGetters {
  getHeaderProps: <T>(options?: T & IHeaderProps) => any;
  getTriggerProps: <T>(options?: T & ITriggerProps) => any;
  getPanelProps: <T>(options?: T & IPanelProps) => any;
}

interface IUseAccordionReturnValue extends IUseAccordionPropGetters {
  expandedSections: number[];
  disabledSections: number[];
}

interface IAccordionContainerProps {
  render?: (options: IUseAccordionReturnValue) => React.ReactNode
}

const content = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

const AccordionContainer = () => {
  return (
    <>
      <AccordionViewItem title="You are all Safe!">
        {content}
      </AccordionViewItem>
    </>
  )
}

export default AccordionContainer;
