'use client';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchShirt = async (id) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/shirts/${id}`,
    {
      headers: {
        'api-key': process.env.NEXT_PUBLIC_API_KEY,
      },
    }
  );

  return data;
};

export default function ShirtDetail({ params }) {
  const { id } = params;
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['shirt', id],
    queryFn: () => fetchShirt(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error... {error.message}</div>;

  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-purple-800 to-pink-600 flex items-center justify-center">
      <div className="max-w-4xl p-6 mx-auto">
        <div className="text-center">
          <Image
            src={data.image_url}
            alt={data.name}
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4">{data.name}</h1>
          <p className="mt-2">{data.description}</p>
          <p className="mt-2">${data.price}</p>
        </div>
      </div>
    </div>
  );
}
