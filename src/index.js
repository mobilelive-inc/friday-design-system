import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '../build'
// import Buttons from './components/Button'
// import Refresh from './components/icons/refresh.svg';

function App(){
  console.log('Buttton', Button)
  return(
    <>
      <h1>Design System</h1>
      <Button>
        Lol
      </Button>
      {/* <button type="button"><Refresh /> Refresh</button> */}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));