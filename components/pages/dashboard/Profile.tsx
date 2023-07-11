import { DetailsLayout, SectionLayout, UserLayout } from "@layouts";
import React, { FC } from "react";

const Profile: FC = () => {
  return (
    <UserLayout>
      <div className="flex w-[100%] pl-[30px] ">
        <SectionLayout>
          <div>Profile</div>
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

export default Profile;
