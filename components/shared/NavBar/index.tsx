import React from 'react'
import { Notifications } from '@icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-[256px] h-[56px] bg-[#FFFFFF] w-[calc(100%-256px)] px-[40px] border-b-[0.2px] border-[#EBEBEB] z-50">
      <div className="flex justify-end mt-4">
        <FontAwesomeIcon icon={faBell} size="xl" />
      </div>
    </div>
  );
}

export default NavBar