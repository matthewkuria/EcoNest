import PageTitle from '@/app/components/PageTitle';
import { getUserById } from '@/app/lib/actions/user';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { Card } from '@nextui-org/react';
import React from 'react'

const ProfilePage = async () => {
    const { getUser } = await getKindeServerSession();
    const user = await getUser();
    const dbUser = await getUserById(user ? user.id: "");
  return (
      <div>
          <PageTitle title='My Profile' linkCaption='Back to Home Page' href='/' />
          <Card>
              <h2>{dbUser?.firstName} {dbUser?.lastName}</h2>
              <p>{dbUser?.email}</p>
        </Card> 
    </div>
  )
}

export default ProfilePage