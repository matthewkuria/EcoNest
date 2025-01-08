import { getKindeServerSession, LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { Button } from '@nextui-org/react';
import React from 'react'

const SigninPanel = async () => {
    const { isAuthenticated, getUser } = await getKindeServerSession();
    const user = await getUser();
    if (await isAuthenticated()) 
        return (
            <div>
                <p>Welcome back, {user?.given_name}!</p>
            </div>
        )
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