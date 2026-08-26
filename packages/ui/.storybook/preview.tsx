import type { Preview } from '@storybook/react-vite'
import { ThemeProvider } from 'next-themes'
import '../src/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0f172a' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="font-sans antialiased text-foreground bg-background min-h-[200px] p-4 rounded-lg flex items-center justify-center">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;