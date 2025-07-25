export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params;
  console.log(resolvedParams);
  const slug = decodeURI(resolvedParams.slug);
  return (
    <div className='flex flex-col items-center justify-center'>
      My Post: {slug}
    </div>
  )
}