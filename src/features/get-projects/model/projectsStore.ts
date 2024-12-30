import { create } from 'zustand';
import { Projects } from './projects';

interface ProjectsState {
  projects: Projects;
  isLoading: boolean;
  setProjects: (projects: Projects) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useProjectStore = create<ProjectsState>((set) => ({
  projects: [],
  isLoading: false,
  setProjects: (projects) => set({ projects }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
