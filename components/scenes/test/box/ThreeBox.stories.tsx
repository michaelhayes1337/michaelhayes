import { ComponentMeta, ComponentStory } from '@storybook/react';
import ThreeBox, { IThreeBox } from './ThreeBox';
import { mockThreeBoxProps } from './ThreeBox.mocks';

export default {
  title: 'templates/ThreeBox',
  component: ThreeBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ThreeBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThreeBox> = (args) => (
  <ThreeBox {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockThreeBoxProps.base,
} as IThreeBox;
