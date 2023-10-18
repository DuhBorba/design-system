import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta

export const Primary: StoryObj<ButtonProps> = {}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}