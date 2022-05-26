import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [isUser, setIsUser] = useState(false);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;

    if (email) {
      fetch(`https://polar-tundra-61708.herokuapp.com/admin/${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsUser(!data.admin);
          setUserLoading(false);
        });
    }
  }, [user]);

  return [isUser, userLoading];
};

export default useAdmin;
