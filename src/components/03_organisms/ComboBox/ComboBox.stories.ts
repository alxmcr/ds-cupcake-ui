import type { Meta, StoryObj } from '@storybook/react';
import mockUsersData from '../../../mocks/data/sample-options-user.json';
import ComboBox from './ComboBox';

const meta = {
  title: 'Organisms/ComboBox',
  component: ComboBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
    isLoadingOptions: { control: 'boolean' },
    id: { control: 'text' },
    name: { control: 'text' },
    labelText: { control: 'text' },
    captionText: { control: 'text' },
  },
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const UserListSuccess: Story = {
  args: {
    options: mockUsersData,
    isLoadingOptions: false,
    id: 'ControlComboBox-Users',
    labelText: 'Elige un usuario',
    captionText: 'Solo podrás elegir a Victor para continuar.',
    name: 'combobox-users',
  },
};

export const UserListPending: Story = {
  args: {
    options: mockUsersData,
    isLoadingOptions: true,
    id: 'ControlComboBox-Users',
    labelText: 'Elige un usuario',
    captionText: 'Solo podrás elegir a Victor para continuar.',
    name: 'combobox-users',
  },
};
