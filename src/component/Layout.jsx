import React, { Children } from 'react'

export const Layout = ({Children}) => {
  return (
    <main>
          <div className='containerMainMain'>
              {Children}
        </div>

    </main>
  )
}


