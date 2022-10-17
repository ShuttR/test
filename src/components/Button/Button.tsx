import React, { FC, memo } from 'react'
import classNames from 'classnames'
import { SmoothCorners } from '../..'
import { ButtonProps } from './Button.types'
import './Button.scss'

const Button: FC<ButtonProps> = ({
  label,
  subLabel,
  icon,
  selected,
  onClick,
}) => (
  <SmoothCorners
    className={classNames({
      Button: true,
      selected,
    })}
    onClick={onClick}
  >
    {icon && (<div className="icon">{icon}</div>)}
    {label && (
      <div>
        {label && (<div className="label">{label}</div>)}
        {subLabel && (<div className="subLabel">{subLabel}</div>)}
      </div>
    )}
  </SmoothCorners>
)

export default memo(Button)
