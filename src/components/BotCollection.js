import React from "react";
import BotCard from "./BotCard";

export default function BotCollection({ bots, handleClick }) {
  return (
    <div className="ui grid">
      {bots.map((bot) => (
        <div className="ui column" key={bot.id}>
          <BotCard bot={bot} handleClick={handleClick} />
        </div>
      ))}
    </div>
  );
}
