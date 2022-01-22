import CrewMembers from '../../components/CrewMembers/CrewMembers';
import TodoList from '../../components/TodoList/TodoList';
// import ProjectTable from '../../components/ProjectTable/ProjectTable'
import './Dashboard.css'
// import LineChart from '../../components/LineChart/LineChart';
const Dashboard = () => {
  return (
      <div className="dashboard">
        <div className='todolist'>
          <TodoList />
        </div>
        <div className='crewcard'>
          <CrewMembers />
        </div>
        {/* <div className='free_container'></div> */}
        {/* <LineChart /> */}
      </div>
  );
};

export default Dashboard;
