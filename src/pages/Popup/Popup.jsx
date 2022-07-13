import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Popup.css';
import logo from '../../assets/img/logo.svg';
import { increment } from '../../state/slices/example';

const Popup = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.example.counter);

  const handleClick = async () => {
    await dispatch(increment());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Counter value is <code>{counter}</code>
        </p>
        <button className='button' onClick={handleClick}>Increment</button>
      </header>
    </div>
  );
};

export default Popup;