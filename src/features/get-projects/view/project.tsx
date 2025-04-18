interface Props {
  data: {
    id: number;
    name: string;
    description: string;
    signature_code: string;
  };
}

function Project(props: Props) {
  const { data } = props;
  return (
    <div className='rounded-xl border p-2 transition-shadow duration-200 hover:shadow-xl'>
      <div className='mb-5 flex flex-row items-center justify-between'>
        <div className='text-2xl font-bold'>{data.name}</div>
        <div className='rounded-lg bg-red-500 p-2 text-sm font-bold text-white'>
          {data.signature_code}
        </div>
      </div>
      <div>{data.description}</div>
      <div>{}</div>
      {/* <div>{data.created_at.replace('T', ' ').slice(0, 19)}</div> */}
    </div>
  );
}

export default Project;
