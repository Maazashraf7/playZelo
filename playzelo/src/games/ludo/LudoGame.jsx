import { useState } from 'react';
import Board from './components/Board';
import Dice from './components/Dice';
import Settings from './components/Settings';
import { GameProvider } from './context/GameContext';
import GameOver from './components/GameOver';
import PlayerChance from './components/PlayerChance';

const LudoGame =()=> {
  const [boardRotate, setBoardRotate] = useState(0);

  return (
    <GameProvider>
      <div
        className="
          grid
          gap-5
          text-center
          p-[25px]
          h-[calc(100vh-50px)]
          w-[calc(100%-70px)]
          grid-cols-[70%_30%]
          max-md:p-[15px] 
          max-md:pt-0
          max-md:h-[calc(100vh-70px)]
          max-md:w-[calc(100vw-30px)]
          max-md:grid-cols-1
        "
      >
        {/* Game Over Overlay */}
        <GameOver />

        {/* Mobile Player Chance (hidden on md+) */}
        <div className="md:hidden">
          <PlayerChance />
        </div>

        {/* Board */}
        <div
          id="board-container"
          className="flex items-center justify-center overflow-hidden"
          style={{ transform: `rotate(${boardRotate}deg)` }}
        >
          <Board />
        </div>

        {/* Right Panel */}
        <div
          id="second-container"
          className="flex flex-col items-center justify-around gap-5"
        >
          <Settings setBoardRotate={setBoardRotate} />

          <div className="dice-container flex w-full items-center justify-center">
            <Dice />
          </div>
        </div>
      </div>
    </GameProvider>
  );
}

export default LudoGame;
