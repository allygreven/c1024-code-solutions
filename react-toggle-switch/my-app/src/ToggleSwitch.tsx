import { useState } from 'react';
import './ToggleSwitch.css';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <div
        className={isOn ? 'toggle-switch is-on' : 'toggle-switch'}
        onClick={handleToggle}>
        <div className="slider">
          <div className="switch"></div>
        </div>
        <span className="state-label">{isOn ? 'ON' : 'OFF'}</span>
      </div>
    </>
  );
}
