import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { MemoryGameProvider } from './hooks/useMemoryGame/MemoryGameProvider';

import { theme } from './styles/theme';

import Home from './pages/Home';
import Play from './pages/Play';

ReactDOM.render(
  <React.StrictMode>
    <MemoryGameProvider>
      <ChakraProvider theme={theme}>

        <BrowserRouter>
          <Switch>

            <Route component={Home} path="/" exact />
            <Route component={Play} path="/play" exact />

          </Switch>
        </BrowserRouter>

      </ChakraProvider>
    </MemoryGameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
