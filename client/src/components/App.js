import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


const App = () => {
  return (
    <div>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Landing} />
                <Route path="/surveys" component={Dashboard} />
                <Route path="/survey_new" component={SurveyNew} />
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App;