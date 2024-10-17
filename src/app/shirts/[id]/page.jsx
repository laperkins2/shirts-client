import ShirtDetail from 'src/app/shirts/ShirtDetail';
export default function Page({ params }) {
  return <ShirtDetail id={params.id} />;
}
