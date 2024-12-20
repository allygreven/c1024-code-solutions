import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} type="button">
        Delete Me!
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Double checking, are you absolutely sure you want to delete?</p>
        <button onClick={() => setIsOpen(false)} type="button">
          Nevermind, Cancel
        </button>
        <button
          onClick={() => {
            alert('Okay fine, its deleted!');
            setIsOpen(false);
          }}
          type="button">
          I said, Delete
        </button>
      </Modal>
    </div>
  );
}
