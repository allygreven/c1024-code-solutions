import './App.tsx';
import './ValidatedInput.css';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  function getValidationMessage(): string {
    if (password.length === 0) {
      return 'A password is required.';
    } else if (password.length < 8) {
      return 'Your password is too short.';
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
        {password.length < 8 ? (
          <FaTimes color="red" />
        ) : (
          <FaCheck color="green" />
        )}
      </div>
    </>
  );
}

{
  /* <div className="flex w-full m-12">
  <label>
    <span className="text-gray-700">Password</span>
    <div className="relative w-80">
      <input className="w-full py-1 pl-2 pr-8 border border-gray-200 rounded" />
      <div className="absolute inset-y-0 right-2 flex items-center">
        <FaIcon />
      </div>
    </div>
    <div className="p-1 text-red-700">error message here</div>
  </label>
</div>; */
}
