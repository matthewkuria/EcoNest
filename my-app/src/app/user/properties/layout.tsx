import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React, { ReactNode } from 'react'

interface PropertiesLayoutProps { 
    children: ReactNode;
}
const PropertiesLayout = ({children}:PropertiesLayoutProps) => {
  return (
      <div>
          <div className="bg-primary-400 flex justify-between items-center p-4">
              <h2 className="text-white text-xl font-semibold px-2">User Properties</h2>
              <Button color='secondary'>
                  <Link href="/user/properties/add">Add a Property</Link>
                  </Button>
          </div>
          {children}
      </div>
  )
}

export default PropertiesLayout