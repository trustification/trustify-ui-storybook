import type { Meta, StoryObj } from "@storybook/react";
import { AppLayout } from "@app/AppLayout/AppLayout";
import { ImportersPage } from "@app/Importers/ImportersPage";

const meta = {
  title: "Importers/Importers Page",
  component: ImportersPage,
  decorators: [
    (Story) => (
        <AppLayout>
          <Story />
        </AppLayout>
    ),
  ],
} satisfies Meta<typeof ImportersPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultState: Story = {};
