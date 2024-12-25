import { supabase } from '@/shared/lib/supabase';
import { useEffect, useState } from 'react';
import Project from '@features/projects/view/project';
import { Tables } from '@shared/types/database.types';

type PartialProject = Omit<
  Tables<'projects'>,
  'created_at' | 'updated_at' | 'deleted_at' | 'manager_id'
>;

const projectsQuery = supabase
  .from('projects')
  .select(`id, name, description, signature_code`)
  .returns<PartialProject[]>();

function ProjectsPage() {
  const [projects, setProjects] = useState<PartialProject[]>([]);

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
        <Project key={`project-${p.signature_code}-${p.id}`} data={p} />
      ))}
    </div>
  );
}

export default ProjectsPage;
