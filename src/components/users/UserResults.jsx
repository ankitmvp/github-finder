import { useEffect, useState } from "react";
import { ClipLoader, HashLoader } from "react-spinners";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    setUsers(data);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <h3>{user.login}</h3>
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
