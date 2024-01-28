import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    gray_100: "bg-gray-100 text-gray-500",
    white_A700: "bg-white-A700 text-gray-500",
  },
  outline: {
    gray_500_6c: "border border-gray-500_6c border-solid text-gray-500",
  },
};
const shapes = { square: "rounded-none", round: "rounded-lg" };
const sizes = {
  xs: "pb-1.5 pt-[5px]",
  sm: "pb-[9px] pr-2 pt-2",
  md: "pb-[35px] pl-2.5 pr-[13px] pt-[13px]",
  lg: "pb-3.5 pl-3.5 pt-[18px]",
  xl: "pb-[21px] sm:pr-5 pr-[21px] pt-[22px]",
  "2xl": "pb-[19px] pl-[19px] pt-[23px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "lg",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_100", "white_A700", "gray_500_6c"]),
};

export { Input };
