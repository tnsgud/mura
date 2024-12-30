import { projectsResource } from '../model/projectsLoader';
import { useProjectStore } from '../model/projectsStore';

export const useGetProjectsViewModel = () => {
  const { projects, isLoading } = useProjectStore();

  return {
    projects: projects.length > 0 ? projects : projectsResource.read(),
    isLoading,
  };
};
