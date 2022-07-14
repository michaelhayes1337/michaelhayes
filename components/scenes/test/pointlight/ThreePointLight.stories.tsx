import { ComponentMeta, ComponentStory } from '@storybook/react';
import ThreePointLight, { IThreePointLight } from './ThreePointLight';
import { mockThreePointLightProps } from './ThreePointLight.mocks';
export default {
  title: 'templates/ThreePointLight',
  component: ThreePointLight,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ThreePointLight>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThreePointLight> = (args) => (
  <ThreePointLight {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockThreePointLightProps.base,
} as IThreePointLight;
