"use client";
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import { Dropdown, DropdownTrigger, User, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { User as PrismaUser } from '@prisma/client';
import Link from 'next/link';
import React from 'react'


interface UserProfilePanelProps { 
    user: PrismaUser;
}
const UserProfilePanel = ( {user} :UserProfilePanelProps) => {
  return (
    <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
                isBordered: true,
                src: user.avatarUrl ?? "/avatar.png",
            }}
            className="transition-transform"
            name={`${user.firstName} ${user.lastName}`}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">{ user.firstName}</p>
              </DropdownItem>
              <DropdownItem key="profile">
                  <Link href="/user/profile">Profile</Link>
            </DropdownItem>
          <DropdownItem key="logout" color="danger">
            <LogoutLink> Log Out</LogoutLink>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
  )
}

export default UserProfilePanel