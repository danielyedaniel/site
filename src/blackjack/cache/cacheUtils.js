export const loadPlayers = () => {
    const playersJson = localStorage.getItem('players');
    const players = playersJson ? JSON.parse(playersJson) : [];
    return players.map(player => ({
      ...player,
      balance: typeof player.balance === 'number' ? player.balance : 0
    }));
  };
  

export const savePlayers = (players) => {
    localStorage.setItem('players', JSON.stringify(players));
};

export const clearPlayersCache = () => {
    localStorage.removeItem('players');
};