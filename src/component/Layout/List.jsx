import React from 'react'
import { Children } from 'react'

function List({children,className,onClick}) {
  return (
   <ul onClick={onClick} className={className}>{children}</ul>
  )
}

export default List