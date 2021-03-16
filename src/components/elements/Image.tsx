import React, { useState, useRef, useEffect } from "react";

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
  const [loaded, setLoaded] = useState(false);

  const image = useRef<HTMLImageElement>();

  useEffect(() => {
    handlePlaceholder(image.current);
  }, [image]);
  
  const placeholderSrc = (width: number, height: number) => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;
  };

  const handlePlaceholder = (img: HTMLImageElement) => {
    const placeholder = document.createElement("img");
    if (!loaded) {
      img.style.display = "none";
      img.before(placeholder);
      placeholder.src = placeholderSrc(
        (img.getAttribute("width") || 0) as number,
        (img.getAttribute("height") || 0) as number
      );
      placeholder.width = img.getAttribute("width");
      placeholder.height = img.getAttribute("height");
      placeholder.style.opacity = "0";
      img.className && placeholder.classList.add(img.className);
      placeholder.remove();
      img.style.display = "";
    }
  };

  function onLoad() {
    setLoaded(true);
  }

  return (
    <img
      ref={image}
      className={imgProp.className}
      src={imgProp.src}
      width={imgProp.width}
      height={imgProp.height}
      alt={imgProp.alt}
      onLoad={onLoad}
    />
  );
}
