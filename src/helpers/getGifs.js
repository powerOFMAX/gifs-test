export const getGifs = async (category) => {
  const URL =
  `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=L2Oyxt6rNTaWdj5MHj2Hd2eRgxzlxmlX`;
  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));

  return gifs;
};