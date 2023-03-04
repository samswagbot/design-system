import React, { useState } from 'react';

export interface Props {
  tabs: {
    label: string;
  }[];
  contents: {
    content: string;
  }[];
  bgColor: string;
  activeColor: string;
}

export const Tabs = ({
  tabs,
  contents,
  bgColor = '#d7d7d7',
  activeColor = 'purple',
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClasses = `p-1 cursor-pointer w-1/3 text-center`;
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col w-96 h-52">
        <div className="flex text-xl  w-100">
          {tabs.map(({ label }, index) => (
            <div
              style={
                activeIndex === index
                  ? {
                      backgroundColor: activeColor,
                      border: `2px solid ${bgColor}`,
                      borderBottom: 'none',
                    }
                  : {}
              }
              className={
                activeIndex === index ? `${tabClasses} text-white` : tabClasses
              }
              onClick={() => setActiveIndex(index)}
            >
              {label}
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: bgColor }} className="p-5">
          {contents.map(({ content }, index) => (
            <div hidden={activeIndex !== index}>{content}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
