import React, { Fragment } from "react";

type PropTypes = {
  children: JSX.Element | React.ReactNode;
};

const SectionLayout = ({ children }: PropTypes) => {
  return (
    <Fragment>
      <div className="w-[683px] min-h-[100vh] bg-[#FBFCFE]">{children}</div>
    </Fragment>
  );
};

export default SectionLayout;
