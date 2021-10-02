
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinners from './Spinners';

describe('<Spinners />', () => {
  test('it should mount', () => {
    render(<Spinners />);
    
    const spinners = screen.getByTestId('Spinners');

    expect(spinners).toBeInTheDocument();
  });
});