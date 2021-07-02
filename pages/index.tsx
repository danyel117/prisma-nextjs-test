import React from 'react';
import { useSession, signIn } from 'next-auth/client';

const index = () => {
  const [session, loading] = useSession();
  if (loading) return <Loading />;

  if (!session) {
    signIn('auth0');
    return <Loading />;
  }
  return <div>hello</div>;
};

const Loading = () => <div>Loading...</div>;

export default index;
