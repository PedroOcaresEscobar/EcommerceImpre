import React, { Children } from 'react'

export const Layout = ({children}) => {
  return (
    <main>
          <div className='containerMainMain'>
          {children}
        </div>

    </main>
  )
}


