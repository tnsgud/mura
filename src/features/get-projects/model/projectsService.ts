import { projectsApi, ProjectsResponse } from './projectsApi';

export const projectsService = {
  getProjects: async (): Promise<ProjectsResponse> =>
    await projectsApi.fetchProjects(),
};
