import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarViewDayRoundedIcon from '@mui/icons-material/CalendarViewDayRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import './Sidebar.css'

const menustyle = {
    color: '#fff',
    fontSize: 32
}

const Sidebar = () => {
  return (
  <div className='sidebar'>
      <div className='iconbackground'>
        <HomeRoundedIcon style={menustyle}/>
      </div>
      <div className='iconbackground'>
        <CalendarViewDayRoundedIcon style={menustyle}/>
      </div>
      <div className='iconbackground'>
        <ChatRoundedIcon style={menustyle}/>
      </div>
      <div className='iconbackground'>
        <QuizRoundedIcon style={menustyle}/>
      </div>
        <div className='iconbackground'>
            <SettingsIcon style={menustyle}/>
        </div>
    
  </div>
  );
};

export default Sidebar;
