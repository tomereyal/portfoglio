import React from "react";

interface IPropsGridBox {
  children: any;
  elementsPerRow: number; //default elementsPerRow
  minWidthBeforeBreak?: number; //in pixels
  style?: any;
  className?: any;
}

export default function GridBox(props: IPropsGridBox) {
  const {
    children,
    elementsPerRow,
    minWidthBeforeBreak = 200,
    style,
    className,
  } = props;

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "stretch",
        gridTemplateColumns: `repeat(auto-fit, minmax(${minWidthBeforeBreak}px, ${
          100 / elementsPerRow
        }%))`,
        gridTemplateRows: `repeat(${
          children.length / elementsPerRow
        }, minmax(min(200px, 100%), 1fr))`,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

