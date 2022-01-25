import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import tinycolor from "tinycolor2";

interface IButtonProps {
  theme?: "filled" | "outlined";
  shape?: "square" | "circle";
  textColor?: string;
  bgc?: string;
  text?: string;
  icon?: any;
  circleSize?: number;
  children?: any;
  className?: string;

  onClick?: MouseEventHandler;
}
interface IButtonStyleProps {
  theme?: "filled" | "outlined";
  shape?: "square" | "circle";
  circleSize?: number;
  textColor?: string;
  className?: string;
  bgc?: string;
}

const BaseButton = styled.button<IButtonStyleProps>`
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme, textColor, bgc }) =>
    theme === "filled" ? bgc : textColor};
  background-color: ${({ theme, bgc }) =>
    theme === "filled" ? bgc : `transparent`};
  color: ${({ theme, textColor, bgc = "white" }) =>
    theme === "filled"
      ? tinycolor
          .mostReadable(bgc, [bgc], { includeFallbackColors: true })
          .toHexString()
      : textColor};

  &:hover {
    border-color: ${({ theme, textColor, bgc }) =>
      theme === "filled" ? bgc : textColor};
    background-color: ${({ theme, textColor = "black", bgc = "white" }) =>
      theme === "filled"
        ? tinycolor
            .mostReadable(bgc, [bgc], {
              includeFallbackColors: true,
            })
            .toHexString()
        : textColor};
    color: ${({ theme, textColor = "black", bgc = "white" }) =>
      theme === "filled"
        ? bgc
        : tinycolor
            .mostReadable(textColor, [textColor], {
              includeFallbackColors: true,
            })
            .toHexString()};
  }

  height: ${({ shape, circleSize }) =>
    shape === "circle" && circleSize ? `${circleSize}px` : ``};
  width: ${({ shape, circleSize }) =>
    shape === "circle" && circleSize ? `${circleSize}px` : ``};
  transition: all 200 ease-in-out;
  border-radius: ${({ shape }) => (shape !== "circle" ? "3.75rem" : ``)};
  padding: ${({ shape }) => (shape === "circle" ? "0.6rem" : `0.8rem 1rem`)};
  ${tw`
    md:m-1
    flex
    justify-center
    items-center
    text-xs
    font-thin
    rounded-full
    md:font-semibold
    focus:outline-none
`};
`;

const Text = styled.span`
  margin-left: 3px;
`;

export default function Button(props: IButtonProps) {
  const {
    theme,
    shape,
    className = "",
    textColor = "black",
    bgc = "white",
    circleSize,
    text,
    icon,
    onClick,
    children,
  } = props;

  console.log("shape topsection", shape);
  return (
    <span onClick={onClick}>
      <BaseButton
        shape={shape}
        theme={theme}
        circleSize={circleSize}
        textColor={textColor}
        bgc={bgc}
        className={className}
      >
        {icon}
        {text && text?.length > 0 ? <Text>{text}</Text> : ""}

        {children}
      </BaseButton>
    </span>
  );
}
