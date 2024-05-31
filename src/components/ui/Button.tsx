"use client";
import { forwardRef } from "react";
import {
  Button as MUIButton,
  ButtonProps,
  CircularProgress,
} from "@mui/material";
import { lighten } from "@mui/material/styles";

interface IButtonProps extends Omit<ButtonProps, "component"> {
  buttonType?: "primary" | "secondary" | "danger" | "warning";
  loading?: boolean;
  progressStyles?: any;
  component?: "button" | "label";
  fullWidth?: boolean;
}

const Button: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  IButtonProps
> = (props, ref) => {
  const {
    variant = "contained",
    buttonType = "primary",
    sx,
    loading = false,
    disabled = false,
    progressStyles,
    children,
    fullWidth = false,
    ...rest
  } = props;

  const renderSwitch = (param: string) => {
    switch (param) {
      case "primary":
        return "#E33A88";
      case "secondary":
        return "#3F5984";
      case "danger":
        return "#ff5555";
      case "warning":
        return "#ffc107";
      default:
        return "#E33A88";
    }
  };

  const buttonDefaultStyles = {
    borderRadius: 0,
    fontSize: "16px",
    fontWeight: "600",
    ":hover": {
      bgcolor: "#1BAA75",
    },
  };

  const buttonStyles =
    variant === "contained"
      ? {
          backgroundColor: renderSwitch(buttonType),
          color: "#fff",
          "&:hover": {
            backgroundColor: lighten(renderSwitch(buttonType), 0.15),
          },
        }
      : {
          borderColor: renderSwitch(buttonType),
          color: renderSwitch(buttonType),
          "&:hover": {
            backgroundColor: lighten(renderSwitch(buttonType), 0.15),
          },
        };

  const mergedStyles = { ...buttonDefaultStyles, ...buttonStyles, ...sx };

  return (
    <MUIButton
      {...rest}
      ref={ref}
      sx={mergedStyles}
      disabled={loading || disabled}
      fullWidth={fullWidth || undefined}
      variant={variant}
    >
      {loading ? (
        <CircularProgress
          color="inherit"
          style={{ width: "28px", height: "28px", ...progressStyles }}
        />
      ) : (
        children
      )}
    </MUIButton>
  );
};

export default forwardRef<HTMLButtonElement, IButtonProps>(Button);
