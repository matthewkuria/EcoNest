import { getKindeServerSession, LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { Button,} from '@nextui-org/react';
import React from 'react'
import UserProfilePanel from './UserProfilePanel';
import prisma from '../lib/prisma';

const SigninPanel = async () => {
    const { isAuthenticated, getUser } = await getKindeServerSession();
    const user = await getUser();
    let dbUser = null;
   
    if (await isAuthenticated()) 
    {
        if (user?.id) {
                dbUser = await prisma.user.findUnique({
                    where: {
                        id: user.id
                    },
                });
            }

         return (
             <>  {dbUser!! && 
                <UserProfilePanel user={dbUser}/>
                }
            </>
        )
       }
   
    
  return (
      <div className='flex gap-3'>
          
          <Button color='primary'>
              <LoginLink>Sign in</LoginLink>
          </Button>
          <Button>
              <RegisterLink>Sign up</RegisterLink> 
          </Button>    
    </div>
  )
}

export default SigninPanel