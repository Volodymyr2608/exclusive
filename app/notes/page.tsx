import { createClient } from '@/supabase/server';

export default async function Notes() {
  const supabase = await createClient();
  const { data: products, error } = await supabase.from("category").select();
  console.log(products)
  return <pre>{JSON.stringify(products, null, 2)}</pre>
}