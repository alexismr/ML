
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFound from './NotFound';

import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';


const history = createMemoryHistory();
const path = `/rutaTest/:id`;

const match: match<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: { id: "1" }
};

const location = createLocation(match.url);

describe('<NotFound />', () => {

  beforeEach(() => {
    render(<NotFound history={history} location={location}   match={match} />);
  })

  test('it should mount', () => {
    const notFound = screen.getByTestId('NotFound');
    expect(notFound).toBeInTheDocument();
  });

  test('it have  url from props', () => {
    const title = screen.getByText(/rutaTest/i);
    expect(title).toBeInTheDocument();
  });

  test('it have diferent path', () => {
    const matchlocal: match<{ id: string }> = {
      isExact: false,
      path,
      url:"newurl",
      params: { id: "1" }
  };
     const locationlocal = createLocation(matchlocal.url);
     const localComponent =render(<NotFound history={history} location={locationlocal}   match={matchlocal} />)  
     localComponent.getByText(/newurl/i);
  });


});