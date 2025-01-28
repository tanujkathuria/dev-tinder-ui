import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const UserCard = ({ firstName, lastName, age, about, gender, photoUrl }) => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="card bg-base-300 w-96 shadow-xl text-white mx-2 h-112 my-1">
      <figure className="h-1/2">
        <img
          src={photoUrl}
          alt="User"
          className="object-cover h-full w-full"
          style={{ height: "100%", width: "100%" }}
        />
      </figure>
      <div className="card-body h-1/2">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {about && <p>{about}</p>}
        {age && gender && <p>{age + "  " + gender}</p>}
        {location.pathname !== "/profile" ||
          (location.pathname !== "/connections" && (
            <div className="card-actions justify-center my-10">
              <button className="btn btn-primary">Ignore</button>
              <button className="btn btn-secondary">Interested</button>
            </div>
          ))}
      </div>
    </div>
  );
};

UserCard.propTypes = {
  photoUrl: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  emailId: PropTypes.string,
  age: PropTypes.number,
  about: PropTypes.string,
  gender: PropTypes.string,
};

export default UserCard;
