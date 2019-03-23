export const getGames = async () => {
  const res = await fetch(
    'https://api.playgame.com/v2/games?offset=0&limit=5&&sort=popular',
  );
  const resJSON = await res.json();
  return resJSON.data;
};
