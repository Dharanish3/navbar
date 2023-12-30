import React from 'react'
import Navbar from './Componenet/Navbar'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import Fullstack from './Componenet/Fullstack'
import Datascience from './Componenet/Datascience'
import Cybersecurity from './Componenet/Cybersecurity'
import Career from './Componenet/Career'

function App() {
  return (
    <>
     <div className='container'>
      <BrowserRouter>
        <Navbar/>
          <Routes>
          
            <Route path='/fullstack' element={<Fullstack/>}/>
            <Route path='/datascience' element={<Datascience/>}/>
            <Route path='/cybersecurity' element={<Cybersecurity/>}/>
            <Route path='/career' element={<Career/>}/>
          </Routes>
        </BrowserRouter>
     </div>
      
    </>
  )
}

export default App