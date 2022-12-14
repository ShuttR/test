import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../..'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const labelButton = Template.bind({})

labelButton.args = {
  label: 'Label',
  subLabel: 'SubLabel',
}
