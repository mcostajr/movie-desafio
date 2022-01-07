import React from 'react';
import ContentLoader from "react-content-loader";

export function LoaderImage() {
  return (
    <ContentLoader
      height={'100%'}
      width={'100%'}
    >
      <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
    </ContentLoader>
  )
}