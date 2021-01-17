import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

function App() {
  return (
    <div className="App">
      <Navbar title="Github Finder" icon="fab fa-github"/>  
      <UserItem/>    
    </div>
  );
}

export default App;
