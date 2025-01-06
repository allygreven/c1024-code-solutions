import { useRef, useState } from 'react';
import './App.css';
import { Popup } from './Popup';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} ref={buttonRef} type="button">
        Pop up!
      </button>
      <p>Who should I pick??</p>
      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        positionTo={buttonRef.current}>
        <ul className="list">
          <li>Pick me!</li>
          <li>No pick me!</li>
          <li>No way, I'm the one!!</li>
          <li>As if!</li>
          <li>I don't care who you pick..</li>
          <li>I swear, if you don't pick me...</li>
        </ul>
      </Popup>
      <p>Should it be YOU?!</p>
    </div>
  );
}
