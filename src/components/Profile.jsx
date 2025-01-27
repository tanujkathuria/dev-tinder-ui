import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);
  if (!user || !user.firstName) {
    return <div>loading..</div>;
  }

  return (
    <div className="flex justify-center mx-10">
      <EditProfile user={user} />
    </div>
  );
};

export default Profile;
