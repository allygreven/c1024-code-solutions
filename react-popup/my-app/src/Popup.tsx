import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  isOpen: boolean;
  positionTo?: HTMLElement | null;
  onClose: () => void;
  children: ReactNode;
};

export function Popup({ isOpen, positionTo, onClose, children }: Props) {
  const r = positionTo?.getBoundingClientRect();
  const top = r ? r.bottom : '50%';
  const left = r ? r.left : '50%';

  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          pointerEvents: 'all',
        }}>
        <div
          style={{
            position: 'absolute',
            top,
            left,
          }}>
          {children}
        </div>
      </div>
    </>,
    document.body
  );
}
