import { useEffect } from "react";
import {
  ACCEPT_REQUESTS,
  REJECT_REQUESTS,
  CONNECTIONS_REQUESTS,
} from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestsSlice";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";

const Requests = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const connections = useSelector((store) => store.requests);
  console.log(connections);
  const fetchRequests = async () => {
    try {
      const response = await axios.get(CONNECTIONS_REQUESTS, {
        withCredentials: true,
      });
      console.log(response.data.connections);
      dispatch(addRequests(response.data.connections));
    } catch (err) {
      console.log(err);
    }
  };

  const handleRejectRequest = async (id) => {
    console.log("handle reject request", id);
    try {
      const response = await axios.post(
        REJECT_REQUESTS + id,
        {},
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        const newConnections = connections.filter(
          (element) => element._id !== id
        );
        dispatch(addRequests(newConnections));
        navigate("/requests");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAcceptRequest = async (id) => {
    console.log("handle accept request", id);
    try {
      const response = await axios.post(
        ACCEPT_REQUESTS + id,
        {},
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        console.log(connections);
        const newConnections = connections.filter(
          (element) => element._id !== id
        );
        dispatch(addRequests(newConnections));
        navigate("/requests");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (connections && connections.length === 0)
    return <div className="text-center">No requests</div>;
  return (
    <div className="flex-col flex flex-wrap items-center pb-80">
      {connections &&
        connections.length > 0 &&
        connections.map((connection) => {
          console.log(connection);
          return (
            <div key={connection._id} className="my-4">
              <UserCard
                _id={connection._id}
                firstName={connection.fromUserId.firstName}
                lastName={connection.fromUserId.lastName}
                photoUrl={connection.fromUserId.photoUrl}
                handleAcceptRequest={handleAcceptRequest}
                handleRejectRequest={handleRejectRequest}
              ></UserCard>
            </div>
          );
        })}
    </div>
  );
};

export default Requests;
