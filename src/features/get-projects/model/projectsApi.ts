import { supabase } from '@lib/supabase';
import { Projects } from './projects';
import { PostgrestError } from '@supabase/supabase-js';

export type ProjectsResponse = {
  data: Projects | null;
  error: PostgrestError | null;
};

export const projectsApi = {
  fetchProjects: async (): Promise<ProjectsResponse> => {
    const { data, error } = await supabase
      .from('projects')
      .select(`id, name, description, signature_code`)
      .returns<Projects>();

    return { data, error };
  },
};
