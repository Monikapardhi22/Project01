import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Massively from './components/Massively'


export default function App() {
  const [selectedView, setSelectedView] = useState("desktop");
  return (
    <div className=''>
      <Navbar selectedView={selectedView} setSelectedView={setSelectedView}/>
      <Massively selectedView={selectedView} />
    </div>
  )
}
