import type { Meta, StoryObj } from "@storybook/react";
import { AppLayout } from "@app/AppLayout/AppLayout";
import { Dashboard } from "@app/Dashboard/Dashboard";

const meta = {
  title: "Dashboard/Dashboard",
  component: Dashboard,
  decorators: [
    (Story) => (
        <AppLayout>
          <Story />
        </AppLayout>
    ),
  ],
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultState: Story = {};
