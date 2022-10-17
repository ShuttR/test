import { ComponentProps } from 'react'

interface SmoothCornersAttributes {
  corners?: number | string
  borderRadius?: string
}

declare const SmoothCornersEl: import('styled-components').StyledComponent<'div', never, SmoothCornersAttributes, never>
export interface SmoothCornersProps
  extends SmoothCornersAttributes, ComponentProps<typeof SmoothCornersEl> {}
