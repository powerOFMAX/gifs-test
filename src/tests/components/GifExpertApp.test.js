import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Gif Expert App', () => {
  const title = 'soy un titulo';
  const url = 'https://localhost/asds.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url}/>)

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should have a paragraph with a title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  })
  
  test('should have a url', () => {
    const img = wrapper.find('img');
    expect(img.props().src).toBe(url)
    expect(img.props().alt).toBe(title)
  })
  
  test('should have animate__fadeIn', () => {
    const div = wrapper.find('div');
    expect( div.hasClass('animate__fadeIn') ).toBeTruthy();
  })
  
})
