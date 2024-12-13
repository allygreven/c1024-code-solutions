import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import './App.css';
import { RegistrationFormControlled } from './RegFormControlled';

export default function App() {
  return (
    <>
      <div className="uncontrolled">
        <h2>Form Uncontrolled</h2>
        <RegistrationFormUncontrolled />
      </div>
      <div className="controlled">
        <h2>Form Controlled</h2>
        <RegistrationFormControlled />
      </div>
    </>
  );
}
