import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordion, Props } from '../src/components/Accordion/Accordion';

const faqs = [
  {
    question: 'Question 1',
    answer:
      'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada.',
  },
  {
    question: 'Question 2',
    answer:
      'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada.',
  },
  {
    question: 'Question 3',
    answer:
      'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada.',
  },
  {
    question: 'Question 4',
    answer:
      'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada.',
  },
];

const meta: Meta = {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    faqs: {
      defaultValue: faqs,
    },
  },
};

export default meta;

const Template: Story<Props> = args => <Accordion {...args} />;

export const Default = Template.bind({});
