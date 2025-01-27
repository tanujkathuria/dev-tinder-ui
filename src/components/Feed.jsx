import axios from "axios";
import { FEED_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const response = await axios.get(FEED_URL, {
        withCredentials: true,
      });
      dispatch(addFeed(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  const user = feed?.users[0];

  return (
    <div className="flex justify-center my-10">
      <UserCard
        firstName={user?.firstName}
        lastName={user?.lastName}
        age={user?.age}
        about={user?.about}
        gender={user?.gender}
        photoUrl={user?.photoUrl}
      ></UserCard>
    </div>
  );
};

export default Feed;
