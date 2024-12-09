import { supabase } from '../supabase';

async function test() {
  const { data, error } = await supabase.from('test_data').select('*');
  const insertData = {
    first_name: 'park',
    second_name: 'soon2',
  };

  if (
    data !== null &&
    data.length !== 0 &&
    data.filter(
      ({ first_name, second_name }) =>
        first_name == insertData.first_name &&
        second_name == insertData.second_name,
    ).length === 0
  ) {
    await supabase.from('test_data').insert({
      first_name: insertData.first_name,
      second_name: insertData.second_name,
    });
  }

  console.log('data:', data);
  console.log('error:', error);
}

function Home() {
  test();

  return (
    <div>
      <div className='h-10 w-10 bg-blue-500'>hello world</div>
    </div>
  );
}

export default Home;
