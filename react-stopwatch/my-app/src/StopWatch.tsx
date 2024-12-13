import { useState } from 'react';
import './App';
import './StopWatch.css';
// import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa6';

export function StopWatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();
  const staticValue = 0;

  function toggleIsRunning() {}

  return (
    <>
      <div className="stop-watch">
        <div className="face-time">
          <span>elapsed seconds</span>
        </div>
        {/* <FaPlay size="2rem" className='play' /> */}
        <FaPause size="2rem" className="start-stop" />
      </div>
    </>
  );
}
