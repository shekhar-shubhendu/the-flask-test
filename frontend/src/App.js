import React from 'react'
import StudentDetailsContainer from './containers/StudentDetails'
import StudentModal from './containers/StudentModal'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/App.css'


function App() {
  return (
    <div className="App">
      <StudentDetailsContainer />
      <StudentModal />
    </div>
  )
}

export default App
