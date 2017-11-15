import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './header'

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveryNew = () => <h2>SurveryNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
    <div>
      // expect to have one child, and only one... at most...
      <BrowserRouter>
        <div>
          <Router path="/" component={Header} />
          <Route exact={true} path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
