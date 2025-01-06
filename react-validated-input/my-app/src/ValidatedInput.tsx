import './App.tsx';
import './ValidatedInput.css';
import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  function getValidationMessage(): string {
    if (password.length === 0) {
      return 'A password is required.';
    } else if (password.length < 8) {
      return 'Your password is too short.';
    } else if (!/\d/.test(password)) {
      return 'Your password requires a number';
    } else if (!/[A-Z]/.test(password)) {
      return 'Your password requires an uppercase letter';
    } else if (!/[!@#$%^&*()]/.test(password)) {
      return 'Your password requires a special character';
    } else {
      return '';
    }
  }

  return (
    <>
      <div className="flex w-full m-12">
        <label className="password">
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <span className="validation-message">{getValidationMessage()}</span>
        {/* FIX RIGHT HERE */}
        {getValidationMessage() === undefined ? (
          <FaTimes color="red" />
        ) : (
          <FaCheck color="green" />
        )}
      </div>
    </>
  );
}
