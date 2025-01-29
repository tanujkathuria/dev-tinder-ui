import { useEffect } from "react";
import { CONNECTIONS } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import UserCard from "./UserCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);
  const user = useSelector((store) => store.user);
  console.log(connections);
  const fetchConnections = async () => {
    try {
      const response = await axios.get(CONNECTIONS, { withCredentials: true });
      console.log(response.data.connections);
      dispatch(addConnection(response.data.connections));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="flex-col flex flex-wrap items-center pb-80">
      {connections &&
        connections.map((connection) => {
          return user._id !== connection.fromUserId._id ? (
            <div key={connection.fromUserId._id} className="my-4">
              <UserCard
                firstName={connection.fromUserId.firstName}
                lastName={connection.fromUserId.lastName}
                photoUrl={connection.fromUserId.photoUrl}
              ></UserCard>
            </div>
          ) : (
            <div key={connection.toUserId._id} className="my-4">
              <UserCard
                firstName={connection.toUserId.firstName}
                lastName={connection.toUserId.lastName}
                photoUrl={connection.toUserId.photoUrl}
              ></UserCard>
            </div>
          );
        })}
    </div>
  );
};

export default Connections;
