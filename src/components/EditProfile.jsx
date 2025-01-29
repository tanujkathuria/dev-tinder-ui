import { useState } from "react";
import PropTypes from "prop-types";
import UserCard from "./UserCard";
import axios from "axios";
import { PROFILE_EDIT } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const response = await axios.patch(
        PROFILE_EDIT,
        { firstName, lastName, age, gender, about, photoUrl },
        { withCredentials: true }
      );
      setSuccess(true);
      setError("");
      dispatch(addUser(response.data.data));
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  if (!user || !user.firstName) {
    return <div>loading..</div>;
  }

  if (user && user.firstName) {
    return (
      <>
        {success && (
          <div className="toast toast-top toast-center z-100">
            <div className="alert alert-success">
              <span>Profile saved successfully.</span>
            </div>
          </div>
        )}
        <div className="flex justify-center my-10">
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body flex">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div className="p-4 m-2">
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="About"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Photo URL"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </label>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <UserCard
            firstName={firstName}
            lastName={lastName}
            age={age}
            about={about}
            gender={gender}
            photoUrl={photoUrl}
          ></UserCard>
        </div>
      </>
    );
  }
};

EditProfile.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    about: PropTypes.string,
    gender: PropTypes.string,
    photoUrl: PropTypes.string,
  }),
};

export default EditProfile;
