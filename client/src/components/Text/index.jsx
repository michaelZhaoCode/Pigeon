import React from "react";

const sizeClasses = {
  txtSFProDisplayMedium14: "font-medium font-sfprodisplay",
  txtInterBold14WhiteA700: "font-bold font-inter",
  txtInterRegular14Gray500: "font-inter font-normal",
  txtInterRegular12WhiteA700: "font-inter font-normal",
  txtSFProDisplayRegular14: "font-normal font-sfprodisplay",
  txtInterMedium14Gray500: "font-inter font-medium",
  txtInterRegular14WhiteA700cc: "font-inter font-normal",
  txtInterBold22: "font-bold font-inter",
  txtSFProDisplayBold16: "font-bold font-sfprodisplay",
  txtInterBold22WhiteA700: "font-bold font-inter",
  txtInterBold16WhiteA700: "font-bold font-inter",
  txtInterBold16Gray500: "font-bold font-inter",
  txtInterBold12IndigoA200: "font-bold font-inter",
  txtInterMedium14Gray900: "font-inter font-medium",
  txtInterBold14Gray500: "font-bold font-inter",
  txtInterBold30Gray900: "font-bold font-inter",
  txtInterBold12Gray500: "font-bold font-inter",
  txtSFProDisplayBold16WhiteA700: "font-bold font-sfprodisplay",
  txtInterBold14: "font-bold font-inter",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtInterBold30Gray500: "font-bold font-inter",
  txtInterBold30: "font-bold font-inter",
  txtSFProDisplayBold30: "font-bold font-sfprodisplay",
  txtInterRegular12: "font-inter font-normal",
  txtInterBold12WhiteA700: "font-bold font-inter",
  txtInterRegular14: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
