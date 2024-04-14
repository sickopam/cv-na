import React from 'react';
import { useRouter } from 'next/router';
import data from '../../data/edu-details.json';
import Education from '@/comp/Education';

const EducationDetail = () => {
  const router = useRouter();
  const { idx } = router.query;
  const i = data.education.find((item) => item.id === parseInt(idx, 10));

  if (!i) {
    return <p>Education not found</p>;
  }
  return <Education i={i} />;
};

export default EducationDetail;
