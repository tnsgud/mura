import { supabase } from '@/supabase';
import { useEffect, useState } from 'react';
import Project from '@components/project';
import { QueryData } from '@supabase/supabase-js';

const projectsQuery = supabase
  .from('projects')
  .select(`id, name, description, signature_code`);

type ProjectsResult = QueryData<typeof projectsQuery>;

function Projects() {
  const [projects, setProjects] = useState<ProjectsResult>([]);

  useEffect(() => {
    projectsQuery.then((query) => {
      const { data, error } = query;

      if (error) {
        throw error;
      }

      if (data == null) {
        setProjects([]);
        return;
      }

      setProjects(data);
    });
  }, []);

  return (
    <div className='grid grid-cols-3 gap-x-5 gap-y-5 px-5 py-5'>
      {projects.map((p) => (
        <Project data={p} />
      ))}
    </div>
  );
}

export default Projects;
