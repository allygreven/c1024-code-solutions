import './App';
import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { username, password } = Object.fromEntries(formData);

    console.log({ username, password });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username"></input>
        </label>
        <label>
          <span className="password">Password:</span>
          <input type="password" name="password"></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
