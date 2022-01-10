import React from 'react';
import ContentLoader from 'react-content-loader'

interface LoaderTextProps {
  height?: number | string;
  width?: number | string;
  line?: number;
  space?: number;
  marginLeft?: number | string;
  radiusX?: number | string;
  radiusY?: number | string;
}

export function LoaderText({
  height = 10,
  width = "100%",
  line = 1,
  space = 20,
  marginLeft = 0,
  radiusX = 3,
  radiusY = 3
}: LoaderTextProps) {

  const heightContainer = line > 1 ? (line * space) : height
  const widthConatiner = Number(width) + Number(marginLeft)

  return (
    <ContentLoader 
      height={heightContainer}
      width={widthConatiner}
      foregroundColor="#8c8282"
    >
      {Array.from({length: line}).map((item, idx) => 
        <rect 
          x={marginLeft}
          y={(idx * space)}
          rx={radiusX}
          ry={radiusY}
          height={height}
          width={width}
        />
      )}
    </ContentLoader>
  )
}