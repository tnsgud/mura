import { useEffect } from 'react';
import Project from './project';
import { useGetProjectsViewModel } from '../view-model/useGetProjectsViewModel';

function ProjectList() {
  const { projects, isLoading, fetchProjects } = useGetProjectsViewModel();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='grid grid-cols-2 justify-center gap-x-5 gap-y-5 px-5 py-5 align-middle sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
      {projects.map((p) => (
        <Project key={`project-${p.signature_code}-${p.id}`} data={p} />
      ))}
    </div>
  );
}

export default ProjectList;
