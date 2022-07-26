import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs, ITab } from '../../ui-kit/Tabs/Tabs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tabs',
  component: Tabs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    tabs: [
        { id: "1", label: "Label №1" },
        { id: "2", label: "Label №2" },
    ]
};