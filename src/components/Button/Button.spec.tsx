import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import {
  describe,
  test,
  expect,
  jest,
} from '@jest/globals'
import { Button } from '../..'

describe('Button', () => {
  test('with label', () => {
    const { container } = render(<Button label="Label" />)

    const labelDiv = container.querySelector('.label')
    expect(labelDiv?.innerHTML).toEqual('Label')
  })

  test('with label and subLabel', () => {
    const { container } = render(<Button label="Label" subLabel="SubLabel" />)

    const labelDiv = container.querySelector('.label')
    const subLabelDiv = container.querySelector('.subLabel')
    expect(labelDiv?.innerHTML).toEqual('Label')
    expect(subLabelDiv?.innerHTML).toEqual('SubLabel')
  })

  test('must detect onClick', () => {
    const handleClick = jest.fn()

    render(<Button label="Label" onClick={handleClick} />)
    fireEvent.click(screen.getByText('Label'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('must be selected', async () => {
    const { container } = render(<Button label="Label" selected />)
    const button = container.querySelector('.Button') as HTMLDivElement
    expect(button?.className.split(' ')).toContain('selected')
  })
})
