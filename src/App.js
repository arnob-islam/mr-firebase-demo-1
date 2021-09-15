import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import ForgetPassword from './components/Auth/ForgetPassword';
import Home from './pages/Home';
import PrivetRoute from './pages/PrivetRoute';
import Navbar from './components/Navbar/Navigator';
import Loading from './components/singleComponents/Loading';
import UserProfile from './components/Profile';
import { useGolobalContext } from './components/contex/TheProvider';
import SubPageAbout from './SubPages/About';
import SubPageBlog from './SubPages/Blog';
import SubPageService from './SubPages/services';
import Error from './components/singleComponents/Error';
import ScroolFixed from './components/singleComponents/ScroolFixed';
import PublicData from './components/Profile/PublicData';
import GeneralSettings from './components/Profile/GeneralSettings';




const App = () => {

  const { loading, isUserIsTrue, showTheRefreshPage } = useGolobalContext()


  if (loading) {
    return <Loading />
  }

  if (showTheRefreshPage) {
    return <Error refresh={true} />
  }


  return (
    <Router>
      {isUserIsTrue && <Navbar />}
      <ScroolFixed />
      <Switch>
        <PrivetRoute exact path='/' component={Home} />
        <Route exact path='/user/signup/'>
          <SignUp />
        </Route>
        <Route path='/user/forgetPassword/'>
          <ForgetPassword />
        </Route>
        <Route path='/login/'>
          <Login />
        </Route>

        <Route path='/public/settings/'>
          <UserProfile>
            <PublicData />
          </UserProfile>
        </Route>

        <Route path='/ganarel/settings/'>
          <UserProfile>
            <GeneralSettings />
          </UserProfile>
        </Route>

        <Route path='/about/'>
          <SubPageAbout />
        </Route>
        <Route path='/blogs/'>
          <SubPageBlog />
        </Route>
        <Route path='/services/'>
          <SubPageService />
        </Route>
        <Route path='*'>
          <Error refresh={false} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
