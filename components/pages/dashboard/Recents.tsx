import { DetailsLayout, SectionLayout, UserLayout } from "@layouts";
import React, { FC } from "react";

const Recents: FC = () => {
  return (
    <UserLayout>
      <div className="flex w-[100%] pl-[30px] ">
        <SectionLayout>
          <div>Recents</div>
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

export default Recents;
