'use client';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const fetchShirts = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/shirts`,
      {
        headers: {
          'api-key': process.env.NEXT_PUBLIC_API_KEY,
        },
      }
    );

    return data;
  };

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['shirts'],
    queryFn: fetchShirts,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error... {error.message}</div>;
  return (
    <div className="container mx-auto">
      <h1 className="test-3xl font-bold text-center my-8">Shirts For Sale</h1>
      <ul className="flex flex-wrap justify-center">
        {data?.map((shirt) => (
          <li key={shirt.id} className="m-4">
            <Link href={`/shirts/${shirt.id}`} className="block text-center">
              {shirt.id}
              <Image
                src={shirt.image_url}
                alt={shirt.name}
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <h2 className="mt-2 text-lg font-medium">{shirt.name}</h2>
              <p>{shirt.description}</p>
              <p>${shirt.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
