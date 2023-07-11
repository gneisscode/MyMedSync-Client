import React, { FC } from "react";
import { UserLayout, SectionLayout, DetailsLayout } from "@layouts";


const Overview: FC = () => {
  return (
    <UserLayout>
      <div className="flex w-[100%] pl-[30px] ">
        <SectionLayout>
          <div>Overview</div>
        </SectionLayout>

        <DetailsLayout>
          <div className="flex flex-col justify-center items-center">
            Details
          </div>
        </DetailsLayout>
      </div>
    </UserLayout>
  );
};

export default Overview;
