import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con get Gifs', () => {
  test('debe de traer 10 elementos', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
  });

  test('should not return results', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
