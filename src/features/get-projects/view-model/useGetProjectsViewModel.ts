import { useProjectStore } from '../model/projectsStore';

export const useGetProjectsViewModel = () => {
  const { projects, isLoading, fetchProjects } = useProjectStore();

  return {
    projects,
    isLoading,
    fetchProjects,
  };
};
