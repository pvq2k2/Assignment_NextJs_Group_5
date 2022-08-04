import { type } from 'os'
import React from 'react'
import { LayoutProps } from '../../models/layout'


const EmptyLayout = ({children}: LayoutProps) => {
    return (
      <div>
          {children}
      </div>
    )
  }

export default EmptyLayout