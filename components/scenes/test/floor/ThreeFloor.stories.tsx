import { ComponentMeta, ComponentStory } from '@storybook/react';
import ThreeFloor, { IThreeFloor } from './ThreeFloor';
import { mockThreeFloorProps } from './ThreeFloor.mocks';

export default {
  title: 'templates/ThreeFloor',
  component: ThreeFloor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ThreeFloor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThreeFloor> = (args) => (
  <ThreeFloor {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockThreeFloorProps.base,
} as IThreeFloor;
