
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('<Header />', () => {

  beforeEach(() => {
    render(<Header/>);
  })
  
  test('it should mount', () => {
    const header = screen.getByTestId('Header');
    expect(header).toBeInTheDocument();
  });

  test('it should contain SearchBox component  ', () => {
    const SearchBoxcompnent = screen.getByTestId('SearchBox');
    expect(SearchBoxcompnent).toBeInTheDocument();
  });


});