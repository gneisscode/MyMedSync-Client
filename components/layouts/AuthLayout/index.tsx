import React, { Fragment } from "react";
import { FileLogo, MyMedSync } from "@icons";
import { Button } from "@shared";

type PropTypes = {
  children: JSX.Element | React.ReactNode;
  title: string;
  loading: boolean;

};

const AuthLayout = ({children, title, loading}: PropTypes) => {
  return (
    <Fragment>
      <div className="flex justify-center bg-[#F7F7F7] w-[100%] min-h-[100vh] pt-[98px] pb-[135.12px] bg-[url('/images/heart.png')]">
        <div className="flex flex-col items-center w-[659px] h-[763px] bg-[#FFFFFF] rounded-lg">
          <div className="flex gap-2 mt-16 mb-10">
            <FileLogo />
            <MyMedSync />
          </div>
          <div> {children}</div>
          <div className="mt-10 w-[440px]">
            <Button
              label={title}
              variant="primary"
              loading={loading}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
  }

export default AuthLayout;
