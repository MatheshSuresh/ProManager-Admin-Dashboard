import {
    Avatar,
    AvatarGroup,
    LinearProgress
} from '@mui/material'
import crew1 from './crew1.png'
import crew2 from './crew2.png'
import './CrewMembers.css'


const CrewMembers = () => {
  return (
      <div className='crew'>
          <div className='crew1'>
            <div className='logo'>
                <img src={crew1} alt="Crew 1"/>
            </div>
            <div className='team-members'>
                    Team Members
                    <AvatarGroup total={24}  style={{margin: '10px'}}>
                        <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" />
                        <Avatar alt="Travis Howard" src="https://previews.123rf.com/images/iko/iko1409/iko140900116/31694000-estudio-de-retrato-de-un-hombre-joven-y-guapo-sorprendi%C3%B3-con-algo.jpg" />
                        <Avatar alt="Agnes Walker" src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" />
                        <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw02wZImLc5FlzdhiCLBEud4gRku20q0eQTA&usqp=CAU" />
                    </AvatarGroup>
            </div>
            <div className='progress1'>
                <span className='progress-title'>Project Completion</span>
                <div className='progress-bar'>
                    <LinearProgress variant="determinate" value='80' style={{backgroundColor: 'white'}}/>
                </div>
            </div>
          </div>
          <div className='crew2'>
            <div className='logo'>
                <img src={crew2} alt="Crew 2"/>
            </div>
            <div className='team-members2'>
                <span>Team Members</span>
                <AvatarGroup total={24}  style={{margin: '10px'}}>
                    <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" />
                    <Avatar alt="Travis Howard" src="https://previews.123rf.com/images/iko/iko1409/iko140900116/31694000-estudio-de-retrato-de-un-hombre-joven-y-guapo-sorprendi%C3%B3-con-algo.jpg" />
                    <Avatar alt="Agnes Walker" src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw02wZImLc5FlzdhiCLBEud4gRku20q0eQTA&usqp=CAU" />
                </AvatarGroup>
            </div>
          </div>
      </div>
  );
};

export default CrewMembers;
