import React, { Fragment } from "react";
import { StyledCVContainer } from "./download-cv.styles";
import { Icon } from "@iconify/react";

const DownloadCV = () => {
  return (
    <Fragment>
      <StyledCVContainer>
        <a
          href="../../assets/files/2024-Resume.pdf"
          download="my_CV"
          target="_blank"
          className="button button--flex"
        >
          Download CV <Icon icon="uil:download-alt" className="button__icon" />
        </a>
      </StyledCVContainer>
    </Fragment>
  );
};

export default DownloadCV;
