import React from 'react';
import { useRouter } from 'next/router';
import data from '../../data/work-details.json';
import Work from '@/comp/Work';

const WorkDetail = () => {
  const router = useRouter();
  const { idx } = router.query;
  const i = data.work.find((item) => item.id === parseInt(idx, 10));

  if (!i) {
    return <p>Work item not found</p>;
  }
  return <Work i={i} />;
};

export default WorkDetail;
