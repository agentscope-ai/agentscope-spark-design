import { HeaderProps } from "./props";
import { useChatContext } from "./ChatContext";
import React from "react";

export const Header = ({}: HeaderProps) => {
  const { setOpen, icons, labels } = useChatContext();

  return (
    <div className="copilotKitHeader">
      <div>{labels.title}</div>
      <div className="copilotKitHeaderControls">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="copilotKitHeaderCloseButton"
        >
          {icons.headerCloseIcon}
        </button>
      </div>
    </div>
  );
};
