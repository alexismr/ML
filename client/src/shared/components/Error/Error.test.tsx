


import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Error from './Error';

describe('<Error />', () => {

  beforeEach(() => {
    render(<Error  mesagge="unit test"/>);
  })


  test('it should mount', () => {
    const error = screen.getByTestId('Error');
    expect(error).toBeInTheDocument();
  });

  test('it have global mesagge', () => {
    const title = screen.getByText(/Error En Sistema/i);
    expect(title).toBeInTheDocument();
  });

  test('it have  mesagge from props', () => {
    const title = screen.getByText(/unit test/i);
    expect(title).toBeInTheDocument();
  });


});