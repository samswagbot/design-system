import React from 'react';
import './drawer.css';

export interface Props {
  /** Controls when the drawer is open */
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  /** states whether the drawer is open */
  isOpen: boolean;
  /** Content for modal, Note: content will clamps after 5 lines */
  children: React.ReactNode;
  /** title of drawer */
  title: string;
  /** position of the drawer */
  position: 'right' | 'left';
}

/** A modal button for all! */
export const Drawer = ({
  isOpen,
  setIsOpen,
  children,
  title,
  position,
}: Props) => {
  const direction =
    position === 'right' ? { top: 0, right: 0 } : { top: 0, left: 0 };
  return (
    <div>
      {isOpen && (
        <>
          <div className="overlay top-0 left-0 absolute w-full h-screen z-10"></div>
          <div style={direction} className="drawer open p-4">
            <div className="flex justify-between mb-2">
              <h1 className="text-xl">{title}</h1>
              <button onClick={() => setIsOpen(false)}>x</button>
            </div>
            <div className="line-clamp">{children}</div>
          </div>
        </>
      )}
    </div>
  );
};
