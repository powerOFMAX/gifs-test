import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Testing hook useFetchGifs', () => {
  test('should return initial value', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('one Punch'))
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([])
    expect(loading).toBe(true)
  });

  test('should return an image array and loading in false', async() => {
    const category = 'one Punch'
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category))
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  })
  
});
