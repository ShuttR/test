import React, { FC, memo } from 'react'
import { SmoothCorners as SmoothCornersBase } from 'react-smooth-corners'
import { SmoothCornersProps } from './SmoothCorners.types'

const SmoothCorners: FC<SmoothCornersProps> = ({
  children, borderRadius, corners, ...props
}) => {
  if ('paintWorklet' in CSS) {
    return (
      <SmoothCornersBase
        borderRadius={borderRadius}
        corners={corners}
        {...props}
      >
        {children}
      </SmoothCornersBase>
    )
  }
  return (
    <div {...props}>{children}</div>
  )
}

SmoothCorners.defaultProps = {
  corners: '10, 8',
  borderRadius: '8px',
}

export default memo(SmoothCorners)
