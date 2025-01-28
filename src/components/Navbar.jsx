import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_URL, PROFILE_URL } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUser = async () => {
    if (user && user.firstName) return;
    try {
      const response = await axios.get(PROFILE_URL, {
        withCredentials: true,
      });
      dispatch(addUser(response.data));
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        LOGOUT_URL,
        {},
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        dispatch(removeUser());
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-xl"
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          Dev Tinder
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        {user && user?.firstName && `Welcome, ${user?.firstName}`}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  user?.photoUrl
                    ? user?.photoUrl
                    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="justify-between" to="/profile">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link to="/connections">Connections</Link>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
