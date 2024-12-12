import { supabase } from '../supabase';
import { useEffect, useState } from 'react';
import { Database, Tables } from '../database.types';

async function test(): Promise<Tables<'test_data'>[]> {
  const { data, error } = await supabase.from('test_data').select('*');

  if (error) {
    console.log(error);
  }

  if (data === null) return [];

  return data;
}

const formatter = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: 'full',
  timeStyle: 'long',
  timeZone: 'Asia/Seoul',
});

function Home() {
  const [data, setData] = useState<Tables<'test_data'>[]>([]);

  useEffect(() => {
    test().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div>
      {data.map((d) => (
        <div className='flex gap-10'>
          <div>{d.id}</div>
          <div>{d.first_name}</div>
          <div>{d.second_name}</div>
          <div>{formatter.format(new Date(d.created_at))}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;
