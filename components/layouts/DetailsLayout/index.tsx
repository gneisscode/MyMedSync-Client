import React, { Fragment } from "react";

type PropTypes = {
  children: JSX.Element | React.ReactNode;
};



const DetailsLayout = ({ children }: PropTypes) => {
  return (
    <Fragment>
      <div className="w-[341px] h-[100vh] bg-[#FFFFFF] px-6 py-9 justify-center items-center ">{children}</div>
    </Fragment>
  );
};

export default DetailsLayout;