import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import MedCabinetLogo from './images/MedCabinetLogo.png';
import './App.css';

import Footer from './components/Footer/Footer.js';
import NavTab from './components/Navigation/NavTab';
import StrainLibrary from './components/StrainLibrary';
import HistoricalData from './components/Navigation/History/HistoricalData.js';
import RegistrationForm from './components/Registration/RegistrationForm';
import Login from './components/login/Login.js';
import Dashboard from './components/Navigation/Dashboard/Dashboard';
import MandatoryForm from './components/MandatoryForm.js';
import StrainDetail from './components/StrainDetail.js';
import StrainCards2 from './components/StrainCards2';
import StrainCards from './components/StrainCards';

import PrivateRoute from './components/PrivateRoute';

// import ContactUs from './components/Navigation';
// import ReviewForm from './components/ReviewForm.js';

// Import Context Object
import { LoginContext } from './contexts/LoginContext.js';

const App = () => {

  // Login Context Data
  const [ creds, setCreds ] = useState({ email: '', password: '' });
  const [ userD, setUserD ] = useState({});
  const [ reviews, setReviews ] = useState([]);
  const [ strainsReviewed, setStrainsReviewed ] = useState([]);
  const [ strainRec, setStrainRec ] = useState([]);
  const [ strainSaved, setStrainSaved ] = useState([]);

  const [ answers, setAnswers ] = useState({
    goal: '',
    pastUser: false,
    useFreq: '',
    intakeTime: ''
  });

  return (

    <LoginContext.Provider value={{ creds, setCreds,
                                    userD, setUserD,
                                    reviews, setReviews,
                                    strainsReviewed, setStrainsReviewed,
                                    strainRec, setStrainRec,
                                    strainSaved, setStrainSaved,
                                    answers, setAnswers
                                 }}>
      <div className="App">
        <header className="App-header">
          <div className='navigation'>
            <div>
              <NavTab />
            </div>
            <div className='logo-container'>
              <img src={MedCabinetLogo} alt="med cabinet logo" />
            </div>
          </div>

          <div>
            <Switch>
              <Route path='/register' component={RegistrationForm} />
              <Route path='/login' component={Login} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/history' component={HistoricalData} />
              <PrivateRoute exact path='/mandatory' component={MandatoryForm} />
              <PrivateRoute exact path= '/strains' component= {StrainLibrary}/>
              <PrivateRoute exact path='/strainDetail' component={StrainDetail} />
              {/* <Route exact path= '/learnmore' component= {learnMore}/>  */}
              {/* <Route exact path= '/contact' component= {ContactUs} />  */}
            </Switch>
          </div>
        </header>

        <Footer />

      </div>
    </LoginContext.Provider>
  );
}

export default App;



