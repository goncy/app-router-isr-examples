export async function generateStaticParams() {
  return [{store: 'a'}]
}

export default async function Store({params}: {params: {store: string}}) {
  const {products} = await fetch(`https://dummyjson.com/products?store=${params.store}`).then(res => res.json() as Promise<{products: unknown[]}>);
  
  console.log(Date.now())

  return (
    <div>Products: {products.length}</div>
  );
}
