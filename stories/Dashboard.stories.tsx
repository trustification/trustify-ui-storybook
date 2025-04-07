import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AppLayout } from "@app/AppLayout/AppLayout";
import { Dashboard } from "@app/Dashboard/Dashboard";

const meta = {
  title: "Dashboard/Dashboard",
  component: () => {
    return <>An example custom homepage for v2.1</>;
  },
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

export const DefaultState: Story = {
  args: {},
};
