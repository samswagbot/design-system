import React, { useState } from 'react';
import './Modal.css';

export interface Props {
  /** Controls when the modal is open */
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  /** states whether the modal is open */
  isOpen: boolean;
  /** Content for modal, Note: content will clamps after 5 lines */
  children: React.ReactNode;
  /** title of modal */
  title: string;
}

/** A modal button for all! */
export const Modal = ({ isOpen, setIsOpen, children, title }: Props) => {
  return (
    <div>
      {isOpen && (
        <>
          <div className="overlay top-0 left-0 absolute w-full h-screen z-10"></div>
          <div className="flex justify-center items-center h-screen">
            <div className=" max-w-md z-10 bg-white p-6 rounded">
              <div className="flex justify-between mb-2">
                <h1 className="text-xl">{title}</h1>
                <button onClick={() => setIsOpen(false)}>x</button>
              </div>
              <p className="line-clamp">{children}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};


