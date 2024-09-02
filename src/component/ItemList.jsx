import React from 'react'
import { Item } from './Item'

export const ItemList = ({items}) => {
  return (
      <>
          {items.map((e) => {
              return (
                  <Item key={e.id} producto={e}/>
              )
          })}

      </>
  )
}


