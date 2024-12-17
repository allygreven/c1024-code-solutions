import { useState } from 'react';
import './App';
import './StopWatch.css';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa6';

export function StopWatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();

  function handleClickIcon() {
    if (intervalID === undefined) {
      const i = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
      setIntervalID(i);
    } else {
      clearInterval(intervalID);
      setIntervalID(undefined);
    }
  }

  function handleClickFace() {
    if (intervalID === undefined) {
      setElapsedTime(0);
    }
  }

  return (
    <>
      <div className="stop-watch">
        <div onClick={handleClickFace} className="face-time">
          <span>{elapsedTime}</span>
        </div>
        <div onClick={handleClickIcon} className="play-pause">
          {intervalID === undefined ? (
            <FaPlay size="2rem" className="start" cursor="pointer" />
          ) : (
            <FaPause size="2rem" className="stop" cursor="pointer" />
          )}
        </div>
      </div>
    </>
  );
}
