import React, {Fragment}from 'react'
import { FileLogo } from '@icons'
import { SideBar } from '@shared'
import { NavBar } from '@shared'

  type PropTypes = {
    children: JSX.Element | React.ReactNode;
  }

const UserLayout = ( {children}: PropTypes) => {
 
  return (
    <Fragment> 
      <div className='flex relative'>
        <SideBar />
        <div className= 'flex flex-col'> 
        <NavBar />
        <div className='flex absolute top-[56px] left-[256px]'>
          <div>{children}</div>
        </div>

        </div>
      </div>

    </Fragment>
  )
}

export default UserLayout