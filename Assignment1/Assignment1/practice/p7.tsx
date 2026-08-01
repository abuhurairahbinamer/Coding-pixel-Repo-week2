// P7 functionality is applied in Assignment1 project,the purpose of creating the practice file is jsut for sake of conveience
import '../src/App';
import Avatar from '../src/components/Avatar';
import Badge from '../src/components/Badge';
import StatCard from '../src/components/StatCard';
import { INITIAL_USERS } from '../src/App';
const ProfileCard: React.FC = () => {
 
const object={
    name:"Abu Hurairah",
    imageUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
    text:"System Online",
    color:"#3b82f6",
    title:"Total Users",
    totalUsers:INITIAL_USERS.length

}
//Deeper
//Avatar component can be used any where
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="header-title">Task P7</h1>
      </header>

      <main className="main-content">
        <Avatar 
          name={object.name} 
          imageUrl={object.imageUrl}
        />
        
        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
          <Badge text={object.text} color={object.color} />
        </div>

        <StatCard title="Total Users" value={object.totalUsers} />


      </main>
    </div>
  );
};

export default ProfileCard;