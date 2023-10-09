import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h2>User Details: {id}</h2>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};

export default UserDetails;
