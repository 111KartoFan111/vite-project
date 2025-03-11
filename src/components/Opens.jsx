import React from 'react';

function Opens({ onToggle }) {
  return (
    <div className="welcome-section">
      <h1>Добро пожаловать!</h1>
      <p className="textr">Это мой маленький уголок в интернете. Нажмите кнопку, чтобы узнать больше.</p>
      <button onClick={() => onToggle(true)}>Открыть меню</button>
    </div>
  );
}

export default Opens;
