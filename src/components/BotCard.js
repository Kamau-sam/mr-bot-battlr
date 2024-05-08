import React from "react";

const BotCard = ({ bot, handleClick }) => {
  return (
    <div className="ui card" onClick={() => handleClick(bot.id)}>
      <div className="image">
        <img alt={bot.name} src={bot.avatar_url} />
      </div>
      <div className="content">
        <div className="header bot-name">{bot.name}</div>
        <div className="meta bot-role">
          <strong>{bot.bot_class}</strong>
        </div>
        <div className="description bot-code">{bot.catchphrase}</div>
      </div>
      <div className="extra content">
        <button onClick={() => handleClick(bot.id)}>Enlist/Discharge</button>
      </div>
    </div>
  );
};

export default BotCard;
