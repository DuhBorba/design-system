import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Button, Box } from '@ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '$10 $6',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
