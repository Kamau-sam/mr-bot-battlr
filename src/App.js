import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";
import SortBar from "./components/SortBar";
import "./App.css";

export default function App() {
  const botsAPI = "https://bots-taupe.vercel.app/bots";
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch(botsAPI)
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  function enlistBot(id) {
    const bot = bots.find((bot) => bot.id === id);
    if (!enlistedBots.includes(bot)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  }

  function dischargeBot(id) {
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== id));
  }

  function handleSort(criteria) {
    const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]);
    setBots(sortedBots);
  }

  return (
    <div className="app-container">
      <h1 className="app-heading">Bot Battlr</h1>
      <SortBar handleSort={handleSort} />
      <BotArmy bots={enlistedBots} handleDischarge={dischargeBot} />
      <BotCollection bots={bots} handleClick={enlistBot} />
    </div>
  );
}
