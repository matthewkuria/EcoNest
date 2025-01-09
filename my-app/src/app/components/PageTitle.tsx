import Link from 'next/link';
import React from 'react'


interface PageTitleProps {
    title?: string;
    href?: string;
    linkCaption?: string;
 }
const PageTitle = (props: PageTitleProps) => {
  return (
      <div className='p-4 bg-gradient-to-br from-blue-400 to-blue-600 text-white'>
          <h1 className='text-xl font-medium'>{props.title}</h1>
          {props.href!! && (
              <Link href={props.href} className='text-white hover:text-blue-200'>
                  {props.linkCaption}
                </Link>
          )}
    </div>
  )
}

export default PageTitle