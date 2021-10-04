import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardItem from './CardItem';
import { Item } from '../../model/IItem';
import { BrowserRouter } from 'react-router-dom';

describe('<CardItem />', () => {

    const properties:Item = {
      id:"1",
      title:"xbox",
      price:{ 
        currency:"$",
        amount:"25000",
        decimals:"164"
      },
      picture:"none",
      condition:"string",
      free_shipping:false,
      sold_quantity:15000,
      description:"xbox one"

    }

    beforeEach(() => {
      render(
        <BrowserRouter>
          <CardItem  item={properties}/>
        </BrowserRouter>
      );
    })
  test('it should mount', () => {
    const productDetail = screen.getByTestId('CardItem');
    expect(productDetail).toBeInTheDocument();
  });

  test('it should has static values (colombia , Completo Unico ) ', () => {
    expect(screen.getByText(/Completo Unico!/i)).toBeInTheDocument();
    expect(screen.getByText(/colombia/i)).toBeInTheDocument();
  });

  test('it should has values from props ', () => {
    // validacion de props title
    expect(screen.getByText(/xbox/i)).toBeInTheDocument();
    // amount
    expect(screen.getByText(/25000/i)).toBeInTheDocument();
  });

});