import { useContext } from "react";
import { HashLoader } from "react-spinners";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <HashLoader
        color="#808080"
        loading={loading}
        size={100}
        className="mx-auto"
      />
    );
  }
}

export default UserResults;
