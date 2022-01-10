import React from 'react';
import styled from 'styled-components';

import Index from './pages/Index'

function App() {
  const AppStyled = styled.div`
  width: 1400px;
  min-width: 375px;
  margin : 0 auto;

  ul {
    list-style : none;
    padding-left : 0;
  }
  `

  return (
    <AppStyled>
      <Index />
    </AppStyled>
  );
}

export default App;
