import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Dashboard } from "@app/Dashboard/Dashboard";
import { AppLayout } from "@app/AppLayout/AppLayout";

const meta = {
  title: "v2.0/Home",
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

export const Primary: Story = {
  args: {},
};
