import { create } from 'zustand';
import { Projects } from './projects';
import { projectsService } from './projectsService';

interface ProjectsState {
  projects: Projects;
  isLoading: boolean;
  fetchProjects: () => Promise<void>;
}

export const useProjectStore = create<ProjectsState>((set) => ({
  projects: [],
  isLoading: false,
  fetchProjects: async () => {
    set({ isLoading: true });
    const { data, error } = await projectsService.getProjects();

    if (error !== null) {
      console.error('failed to fetch projects: ', error);
      set({ isLoading: true });
      return;
    }

    set({ projects: data ?? [], isLoading: false });
  },
}));
