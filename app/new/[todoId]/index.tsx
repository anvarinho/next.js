import { useRouter } from 'next/router';

const ItemPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  return <div>Item ID: {id} </div>;
};

export default ItemPage;