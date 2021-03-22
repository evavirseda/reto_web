
import { Switch, Route } from 'react-router-dom'
import PhoneList from './pages/PhoneList'
import PhoneDetails from './pages/PhoneDetails.js'
import Navigation from './layout/Navigation/Navigation'
import Footer from './layout/Footer/Footer'
import './App.css'

function App() {
    return (
        <main>
            <Navigation/>
                <Switch>
                <Route path="/" exact render={() => <PhoneList />} />
                <Route path="/details/:phoneId" exact render={props => <PhoneDetails {...props} />} />
            </Switch>
            <Footer/>
        </main>
    )
}
export default App