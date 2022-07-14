import { ComponentMeta, ComponentStory } from '@storybook/react';
import TestThree, { ITestThree } from './TestThree';
import { mockTestThreeProps } from './TestThree.mocks';

export default {
  title: 'templates/TestThree',
  component: TestThree,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TestThree>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TestThree> = (args) => (
  <TestThree {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTestThreeProps.base,
} as ITestThree;