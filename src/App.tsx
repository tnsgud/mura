import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import { Session } from '@supabase/supabase-js';
import { useNavigate } from 'react-router';

async function signWithKakao() {
  const { data } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: { redirectTo: '/home' },
  });

  console.log('sign in data:', data);
}

function App() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (session) {
    navigate('/home');
    return <div>you're sign in!!</div>;
  }

  return (
    <div>
      you're not sign in <br />
      <button onClick={signWithKakao}>click me</button>
    </div>
  );
}

export default App;
