import * as React from "react";
export interface ModalcomponentProps {
  type?: string;
  label?: string;
  size?: string;
  children?: React.ReactNode;
  onClick?: Function;
}
declare const Modalcomponent: React.ForwardRefExoticComponent<
  ModalcomponentProps & React.RefAttributes<unknown>
>;
export default Modalcomponent;