import React, { useState, useRef, useEffect } from "react";
import OptimizedImage from "next/image";

interface ImageProp {
  className?: string;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
}

const defaultProps: ImageProp = {
  className: undefined,
  src: undefined,
  width: undefined,
  height: undefined,
  alt: undefined,
};

export default function Image(imgProp: ImageProp = defaultProps): JSX.Element {
  return (
    <OptimizedImage
      className={imgProp.className}
      src={imgProp.src}
      width={imgProp.width}
      height={imgProp.height}
      alt={imgProp.alt}
    />
  );
}
