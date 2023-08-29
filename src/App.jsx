import React from 'react'
import './App.css'
import { originals,actions,Comedy,Romance,Documentaries} from './urls'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/RowPost/Rowpost'



function App() {
  return (
    <>
    
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={actions} title='Action' isSmall />
      <Rowpost url={Comedy} title='Comedy' isSmall/>
      <Rowpost url={Romance} title='Romance' isSmall/>
      <Rowpost url={Documentaries} title='Documentaries' isSmall/>
     
      

    </>
  )
}

export default App
