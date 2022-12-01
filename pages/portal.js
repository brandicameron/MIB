import React from 'react';
import Layout from '../components/Layout/Layout';
import TargetOverview from '../components/TargetOverview/TargetOverview';

export default function Portal() {
  // return <TargetOverview />;
  return <h1></h1>;
}

Portal.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
