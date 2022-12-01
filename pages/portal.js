import React from 'react';
import Layout from '../components/Layout/Layout';
import TargetOverview from '../components/TargetOverview/TargetOverview';

export default function Portal() {
  return <TargetOverview />;
}

Portal.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
