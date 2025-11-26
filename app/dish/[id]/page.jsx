'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getDishById } from '../../data/menu-data';
import DishDetails from '../../components/DishDetails';

export default function DishPage() {
  const params = useParams();
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const foundDish = getDishById(params.id);
      setDish(foundDish);
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C41E3A] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dish details...</p>
        </div>
      </div>
    );
  }

  if (!dish) {
    return (
      <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2F2F2F]">Dish not found</h1>
          <p className="text-gray-600 mt-2">The dish you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return <DishDetails dish={dish} />;
}