
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoContent from './NoContent';

describe('<NoContent />', () => {

  beforeEach(() => {
    render(<NoContent  filter="text to show"/>);
  })
  test('it should mount', () => {
    const noContent = screen.getByTestId('NoContent');
    expect(noContent).toBeInTheDocument();
  });

  test('it has text from props (filter:string)', () => {
    const filter = screen.getByText(/text to show/i);
    expect(filter).toBeInTheDocument();
  });

  
});