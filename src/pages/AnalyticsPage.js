import React from 'react';
import { useParams } from 'react-router-dom';

export default function AnalyticsPage() {
  const { adId } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Ad Analytics</h1>
      <p className="mt-4">Analytics for Ad ID: {adId}</p>
    </div>
  );
}
