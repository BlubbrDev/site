import React, {
  MouseEventHandler,
  ReactNode,
  ReactNodeArray,
  useEffect,
} from "react";
import classNames from "classnames";

type ModalProp = {
  className?: string;
  children?: ReactNode | ReactNodeArray;
  handleClose?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  show: boolean;
  closeHidden?: boolean;
  video: string;
  videoTag: string;
  id: string;
};

export default function Modal({
  className = undefined,
  children = null,
  handleClose = undefined,
  show = false,
  closeHidden = false,
  video = "",
  videoTag = "iframe",
  id = "video-modal",
}: ModalProp) {
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", stopProgagation);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", stopProgagation);
    };
  });

  useEffect(() => {
    handleBodyClass();
  }, [show]);

  const handleBodyClass = () => {
    if (document.querySelectorAll(".modal.is-active").length) {
      document.body.classList.add("modal-is-active");
    } else {
      document.body.classList.remove("modal-is-active");
    }
  };

  const keyPress = (e: any) => {
    if (e.keyCode === 27 && handleClose) {
      handleClose(e);
    }
  };

  const stopProgagation = (e: any) => {
    e.stopPropagation();
  };

  const classes = classNames(
    "modal",
    show && "is-active",
    video && "modal-video",
    className
  );

  return (
    <>
      {show && (
        <div id={id} className={classes} onClick={handleClose}>
          <div className="modal-inner" onClick={stopProgagation}>
            {video ? (
              <div className="responsive-video">
                {videoTag === "iframe" ? (
                  <iframe
                    title="video"
                    src={video}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video v-else controls src={video}></video>
                )}
              </div>
            ) : (
              <>
                {!closeHidden && (
                  <button
                    className="modal-close"
                    aria-label="close"
                    onClick={handleClose}
                  ></button>
                )}
                <div className="modal-content">{children}</div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
