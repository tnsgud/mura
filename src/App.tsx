import { useEffect, useState } from 'react';
import { createClient, Session } from '@supabase/supabase-js';

const supabase = createClient(
  `${import.meta.env.VITE_SUPABASE_PROJECT_URL}`,
  `${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
);

async function signWithKakao() {
  await supabase.auth.signInWithOAuth({ provider: 'kakao' });
}

function App() {
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

  if (!session) {
    return (
      <div>
        you're not sign in <br />
        <button onClick={signWithKakao}>click me</button>
      </div>
    );
  }
  return <div>you're sign in!!</div>;
}

export default App;
