import { Tables } from '@shared/types/database.types';

export type Projects = Omit<
  Tables<'projects'>,
  'created_at' | 'updated_at' | 'deleted_at' | 'manager_id'
>[];
