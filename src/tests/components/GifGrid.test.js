import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Testing <GifGrid />', () => {
  test('should match snapshot', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={'one punch'} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show images on useFetchGifs done', () => {
    const gifs = [{ id: 'ABC', url: 'https://localhost/sth.jpg', title: 'cualquiercosa'}]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category={'one punch'} />);
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  })   
  
});
