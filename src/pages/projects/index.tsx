import ProjectList from '@features/get-projects/view/projectList';
import { Suspense } from 'react';

function ProjectsPage() {
  return (
    <Suspense fallback={<div>projects Loading...</div>}>
      <ProjectList />
    </Suspense>
  );
}

export default ProjectsPage;
