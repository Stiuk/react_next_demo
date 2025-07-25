export default async function Page () {
    "use server";
    await new Promise<string>((resolve) => {
      console.log('in executing sleep!')
      setTimeout(() => resolve("after 3000 ms!"), 3000);
    });
    console.log('sleep over!')
    return (
      <div className='flex flex-col items-center justify-center'>
        photo page
      </div>
    )
}