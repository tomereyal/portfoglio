import React, { useRef } from "react";
import throttle from "lodash.throttle";

interface ResizeData {
  h: number;
  w: number;
  fontSize: number;
}

export function withWindowResize(WrappedComponent: any) {
  return class extends React.Component<any, ResizeData> {
    state = {
      h: window.screen.height,
      w: window.screen.width,
      fontSize: 20, //find a way to get props here for the base font size user wants
    };

    //also find a way to get the minimum and maximum font size from user

    constructor(props: any) {
      super(props);

      const myFunc = () => {
        const { height: newH, width: newW } = window.visualViewport;
        this.setState((prev: ResizeData) => {
          const newFontSize = calculateFontSize({ newH, newW, ...prev });

          return {
            h: newH,
            w: newW,
            fontSize: newFontSize,
          };
        });
      };
      window.addEventListener("resize", throttle(myFunc, 600, {}));
    }

    //reset the hDelta and wDelta on componentDidUpdate

    render() {
      const { fontSize } = this.state;
      return <WrappedComponent {...this.props} fontSize={fontSize} />;
    }
  };
}

function calculateFontSize({ h, w, fontSize, newH, newW }: any): number {
  const fontAfterWDelta = (newW / w) * fontSize;
  const fontAfterHDelta = (newH / h) * fontAfterWDelta;
  return fontAfterWDelta;
}

interface IPropsResponsiveText {
  fontSize: number;
  resizeData: ResizeData;
}

//NEW IDEA - save a constant ratio = initialWidth/initialFontSize  if width doubles than fontsize will double..
export const ResponsiveText = withWindowResize(
  class ResponsiveText extends React.Component<IPropsResponsiveText> {
    render() {
      const { children, fontSize } = this.props;

      return (
        <TextBox size={fontSize} {...this.props}>
          {children}
        </TextBox>
      );
    }
  }
);

interface IPropsTextBox {
  size: number;
  style?: any;
}
export class TextBox extends React.Component<IPropsTextBox> {
  render() {
    const { size, children, style } = this.props;
    return <p style={{ ...style, fontSize: size + "px" }}>{children}</p>;
  }
}
