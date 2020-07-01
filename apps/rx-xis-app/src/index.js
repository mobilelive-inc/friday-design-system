import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button, index, Innput
} from '../build'

function App(){
  console.log("index ", Innput);
  return(
    <>
      <h1>Design System</h1>
      <Button>
        I am button exported from design system
      </Button>
      <index />
      <Innput />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));