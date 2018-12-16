export const getGames = async () => {
  const res = await fetch('https://api.playgame.com/v1/games?offset=0&limit=5');
  const resJSON = await res.json();
  return resJSON;
};
