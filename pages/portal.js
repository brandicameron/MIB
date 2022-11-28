import React from 'react';
import Layout from '../components/Layout/Layout';

export default function Portal() {
  return (
    <div>
      <h1>Portal Home</h1>
    </div>
  );
}

Portal.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
