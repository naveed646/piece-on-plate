import HeaderAndProfile from "../components/userDashboardComp/HeaderAndProfile";
import Sidebar from "../components/userDashboardComp/Sidebar";

const UserDashboard = () => {
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
     <HeaderAndProfile/>

      <main className="flex-1 p-6 grid grid-cols-5 lg:grid-cols-3 gap-6">
          <Sidebar/>
          
      </main>
    </div>
  );
};

export default UserDashboard;
