import React from "react";
import BotCard from "./BotCard";

export default function BotArmy({ bots, handleDischarge }) {
  return (
    <div className="ui segment inverted blue">
      <h2>Enlisted Bots</h2>
      <div className="ui five column grid">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => handleDischarge(bot.id)}
          />
        ))}
      </div>
    </div>
  );
}
