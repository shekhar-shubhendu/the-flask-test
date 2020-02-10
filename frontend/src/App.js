import React from 'react'
import { Card } from 'react-bootstrap'
import StudentDetailsContainer from './containers/StudentDetails'
import StudentModal from './containers/StudentModal'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <Card body className="student-details-card">
        <StudentDetailsContainer />
      </Card>
      <StudentModal />
    </div>
  )
}

export default App
