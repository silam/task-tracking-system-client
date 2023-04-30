import './App.css';
import Login from './Views/Login/login';
import { useSelector } from 'react-redux';

function App() {

  const {auth} = useSelector(state=>state)
  return (
    <>
      {!auth.loggedIn ? <Login/>: <></>}
    </>
  );
}

export default App;
