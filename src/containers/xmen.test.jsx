/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest, } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router';
import Xmen from './xmen';
import mockData from '../services/mockData.json';

const server = setupServer(
  rest.get('https://xmenapiheroku.herokuapp.com/api/characters', (req, res, ctx) => {
    return res(
      ctx.json(mockData)
    );
  }
  )
);

describe('xmen Character container', async () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('fetches a list of xmen characters', async () => {
    render(
      <MemoryRouter>
        <Xmen />           
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(ul).toMatchSnapshot();
  });

});
