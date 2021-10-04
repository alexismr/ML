
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDetail from './ProductDetail';
import { BrowserRouter } from 'react-router-dom';

describe('<ProductDetail />', () => {
  test('it should mount', () => {
    render(
      <BrowserRouter>
        <ProductDetail />
      </BrowserRouter>

    );

    const productDetail = screen.getByTestId('ProductDetail');

    expect(productDetail).toBeInTheDocument();
  });
});