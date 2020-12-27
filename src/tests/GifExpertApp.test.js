import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('Probando <GifExpertApp/>', () => {
  test('should match the snapshot', () => {
    const wrapper = shallow(<GifExpertApp/>);
    expect(wrapper).toMatchSnapshot();
  })
  
  test('should show a list of categories', () => {
    const categories = ['one punch', 'dragon ball']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
  
})
