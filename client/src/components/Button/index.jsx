import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[12px]" };
const variants = {
  fill: {
    white_A700_99: "bg-white-A700_99",
    white_A700: "bg-white-A700",
    indigo_600: "bg-indigo-600 text-white-A700",
    gray_900: "bg-gray-900 text-white-A700",
    light_blue_200_33: "bg-light_blue-200_33",
    gray_100: "bg-gray-100",
    light_blue_200: "bg-light_blue-200 text-white-A700",
    green_400: "bg-green-400 text-white-A700",
    white_A700_33: "bg-white-A700_33",
    indigo_A200: "bg-indigo-A200 text-white-A700",
    red_A200: "bg-red-A200 text-white-A700",
    nostalgia: "bg-amber-700 text-white-A700",
  },
  outline: {
    gray_500_6c: "border-2 border-gray-500_6c border-solid text-gray-900",
    gray_500_33: "border-2 border-gray-500_33 border-solid",
    white_A700_33: "border-2 border-solid border-white-A700_33",
    gray_500_66: "border-2 border-gray-500_66 border-solid text-gray-900",
  },
};
const sizes = {
  xs: "p-[3px]",
  sm: "p-[7px]",
  md: "p-2.5",
  lg: "p-[15px]",
  xl: "sm:pr-5 pr-[22px] py-[22px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700_99",
    "white_A700",
    "indigo_600",
    "gray_900",
    "light_blue_200_33",
    "gray_100",
    "light_blue_200",
    "green_400",
    "white_A700_33",
    "indigo_A200",
    "red_A200",
    "gray_500_6c",
    "gray_500_33",
    "gray_500_66",
  ]),
};

export { Button };
