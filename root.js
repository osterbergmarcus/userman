import React      from 'react'
import { render } from 'react-dom'
import Firebase   from 'firebase'
import { App }    from '../containers'    


//render the main component and mount to the root DOM element
render(
  <App />,
  document.getElementById('react-mount')
)