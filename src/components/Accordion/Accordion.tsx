import React, { useState } from 'react';
import './accordion.css';

export interface Props {
  faqs: {
    question: string;
    answer: string;
  }[];
  bgColor: string;
  textColor: string;
}

export const Accordion = ({
  faqs,
  bgColor = '#fad7e6',
  textColor = '#ee6aa2',
}: Props) => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div
        style={{
          width: '500px',
        }}
      >
        {faqs.map(({ question, answer }, i) => (
          <div
            style={{
              backgroundColor: bgColor,
              color: textColor,
            }}
            className="mb-2 rounded p-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(i)}
            >
              <h1 className="text-xl font-bold">{question}</h1>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              {answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
