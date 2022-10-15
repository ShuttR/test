import React, { FC, memo } from 'react'
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <div className="Button">
      { label }
    </div>
  )
}

export default memo(Button)
