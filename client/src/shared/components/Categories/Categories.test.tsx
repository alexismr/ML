
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Categories from './Categories';
import React from 'react';


import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('<Categories />', () => {
  Enzyme.configure({ adapter: new Adapter() });
  const mockSetState = jest.fn();


  test('it should mount', () => {
    render(<Categories />); 
    const categories = screen.getByTestId('Categories');
    expect(categories).toBeInTheDocument();
  });


  test('it should  contain  2 li ', () => {
    const myInitialState = ['categorias' ,'test']
    React.useState = jest.fn().mockReturnValue([myInitialState, mockSetState])

    const wrapper = shallow(<Categories />);
    // validar cuantos elemento li renderiza
    expect(wrapper.find('li').children().length).toBe(2);

     // validar el valor del primer elemento 
    expect(wrapper.find('li').first().text()).toBe("categorias");

      // validar el valor del ultimo elemento 
    expect(wrapper.find('li').last().text()).toBe("test");
  });



  test('it should  contain  1 li ', () => {
    const myInitialState = ['fruta']
    React.useState = jest.fn().mockReturnValue([myInitialState, mockSetState])

    const wrapper = shallow(<Categories />);
    
     //validar cuantos elemento li renderiza
     expect(wrapper.find('li').children().length).toBe(1);

     // validar el valor del primer elemento 
     expect(wrapper.find('li').first().text()).toBe("fruta");


  });

  



});