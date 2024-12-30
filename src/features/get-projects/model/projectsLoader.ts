import { wrapPromise } from '@/shared/lib/suspenseFriendly';
import { projectsApi } from './projectsApi';
import { useProjectStore } from './projectsStore';

const t = async () => {
  const { data } = await projectsApi.fetchProjects();
  const { setProjects } = useProjectStore.getState();

  if (data === null) {
    setProjects([]);
    return [];
  }

  setProjects(data);

  return data;
};

export const projectsResource = wrapPromise(t());
