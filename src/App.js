import ResponsiveAppBar from './components/Appbar/Appbar';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  return (
      <div style={{backgroundColor: '#2a3550'}}>
          <ResponsiveAppBar/>
          <div className='App'>
            <Sidebar />
            <Dashboard/>
          </div>
      </div>
  );
};

export default App;
