'use client';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/outline';

export default function Home() {
  const { addItem } = useCart();

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

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner"></div>
      </div>
    );
  if (isError)
    return (
      <div className="text-center text-red-500">Error... {error.message}</div>
    );
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Shirts For Sale</h1>

      <ul className="flex flex-wrap justify-center">
        {data?.map((shirt) => (
          <li key={shirt.id} className="m-4">
            <Link href={`/shirts/${shirt.id}`} className="block text-center">
              <Image
                src={shirt.image_url}
                alt={shirt.name}
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <h2 className="mt-2 text-lg font-medium">{shirt.name}</h2>
              <p className="text-gray-500">
                ID: <span className="opacity-25">{shirt.id}</span>
              </p>
              <p>{shirt.description}</p>
              <p className="text-gray-500">
                Price: <span className="opacity-25">{shirt.price}</span>
              </p>
            </Link>
            <div className="mt-2 cursor-pointer" onClick={() => addItem(shirt)}>
              <ShoppingCartIcon className="w-6 h-6 text-blue-500" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
