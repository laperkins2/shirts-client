'use client';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
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
    console.log();
    return data;
  };

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['shirts'],
    queryFn: fetchShirts,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error... {error.message}</div>;
  return (
    <div>
      <h1>Shirts For Sale</h1>
      <ul>
        {data?.map((shirt) => (
          <li key={shirt.id}>
            {shirt.id}
            <Image
              src={shirt.image}
              alt={shirt.name}
              width={200}
              height={200}
            />
            <h2>{shirt.name}</h2>
            <p>{shirt.description}</p>
            <p>${shirt.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
