import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Massively from './components/Massively'
import { Routes,Route } from 'react-router';


  import GenericContent from './components/GenericContent';
import ElementsContent from './components/ElementsContent';

export default function App() {
  const [selectedView, setSelectedView] = useState("massively");
  return (
    <div className=''>
      <Navbar selectedView={selectedView} setSelectedView={setSelectedView}/>
      <Massively selectedView={selectedView} />
      <Routes>
        <Route path='/elements'  element={<ElementsContent/>}/>
        <Route path='/generic' element={<GenericContent/>}/>
      </Routes>
     
    </div>
  )
}
