
import React, { useCallback, useEffect, useState } from 'react';

function getUser (userId: number) {
    return {
        name: `name${userId}`,
        email: `email${userId}`
    }
}

function User({ userId } : { userId: number }) {
  const [user, setUser] = useState({ name: '', email: '' });

  const fetchUser = useCallback(() => {
    const newUser = getUser(userId)
    setUser(newUser);
  }, [userId]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

//  会忽略userId的更新
//   const fetchUser = () => {
//     const newUser = getUser(userId)
//     setUser(newUser);
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);



  return (
    <div>
      {user.name} : {user.email}
    </div>
  );
}

function Index1() {
    const [userId, setUSerId] = useState(1);

    return(
        <div>
            <p>Index1 userId: {userId}</p>
            <p><button onClick={(): void => setUSerId(userId + 1)}>change userId</button></p>
            <User userId={userId} />
        </div>
    )
}
export default Index1;