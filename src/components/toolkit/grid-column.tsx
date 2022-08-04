import { classNames } from '../../core/helpers/class-names'
import React from 'react'

export type GridColumnElementType = 'div' | 'section'
export interface GridColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: GridColumnElementType
  amount: string
}

const Column: React.FC<GridColumnProps> = ({
  className,
  as = 'div',
  children,
  amount,
  ...props
}) => {
  return React.createElement(
    as,
    { ...props, className: classNames(`grid grid-cols-${amount}`, className) },
    children
  )
}

export default Column
