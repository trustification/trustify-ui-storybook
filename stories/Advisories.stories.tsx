import type { Meta, StoryObj } from "@storybook/react";
import { AppLayout } from "@app/AppLayout/AppLayout";
import { AdvisoriesPage } from "@app/Advisories/AdvisoriesPage";

const meta = {
  title: "Advisories/Advisories Page",
  component: AdvisoriesPage,
  decorators: [
    (Story) => (
        <AppLayout>
          <Story />
        </AppLayout>
    ),
  ],
} satisfies Meta<typeof AdvisoriesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultState: Story = {};
