import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Props, Drawer } from '../src/components/Drawer/Drawer';
import { Button } from '../src/components/Button/Button';

const meta: Meta = {
  title: 'Drawer',
  component: Drawer,
};

export default meta;

const Template: Story<Props> = args => {
  const [showModal, setShowModal] = useState(false);
  const props = { ...args, ...{ isOpen: showModal, setIsOpen: setShowModal } };

  return (
    <div>
      {!showModal && (
        <Button onClick={() => setShowModal(!showModal)}>Open Drawer</Button>
      )}
      <Drawer {...props} />
    </div>
  );
};

export const RightSideBar = Template.bind({});
export const LeftSideBar = Template.bind({});

RightSideBar.args = {
  position: 'right',
  title: 'A Great title!',
  children:
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
};

LeftSideBar.args = {
  position: 'left',
  title: 'A small title!',
  children:
    'Contrary to popular belief, Lorem Ipsum is not simply random text.',
};
