import React from 'react';
import { useRouter } from 'next/router';
import data from '../../data/project-details.json';
import Project from '@/comp/Project';

const ProjectDetail = () => {
  const router = useRouter();
  const { idx } = router.query;
  const i = data.project.find((item) => item.id === parseInt(idx, 10));

  if (!i) {
    return <p>Project not found</p>;
  }
  return <Project i={i} />;
};

export default ProjectDetail;
