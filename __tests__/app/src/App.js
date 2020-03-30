import React from 'react';
import stylished from './stylished/stylished';

const MyButton = stylished('button')`
  background-color: red;
  &:hover {
    background-color: blue;
  }
  @media (max-width: 500px) {{
    background-color: blue;
  }}
  height: 100px;
  width: 200px;
`;

function App() {
  return (
    <div>
      <header>
        <MyButton onMouseOver={() => alert('cypress')}>cypress</MyButton>
      </header>
    </div>
  );
}

export default App;
