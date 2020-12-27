import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('pruebas en componente <AddCategory/>', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should be shown properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change the input box', () => {
    const input = wrapper.find('input');
    const value = 'ejemploo';
    input.simulate('change', { target: { value } });

    //  console.log(wrapper.find('p').text().trim())
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('should not post info onSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call the setCategories and clear the text box', () => {
    const value = 'one Punch';

    // Simular el inputchange
    wrapper.find('input').simulate('change', { target: { value } });

    // Simular el submit
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    // setCategories fue llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // el valor del input debe ser ''
    expect(wrapper.find('input').props().value).toBe('');
  });
});
