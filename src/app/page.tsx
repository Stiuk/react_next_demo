import SignupForm from "@/components/signupFrom";
import Link from "next/link";

export default function Home() {
  const now = new Date();

  const year = now.getFullYear();
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  const day = ('0' + now.getDate()).slice(-2);
  const hours = ('0' + now.getHours()).slice(-2);
  const minutes = ('0' + now.getMinutes()).slice(-2);
  const seconds = ('0' + now.getSeconds()).slice(-2);

  const formattedTime = [year,month,day,hours,minutes,seconds].join('-');
  return (
    <div className='flex flex-col items-center justify-center'>
      <Link href={encodeURI("/posts/测试动态路由" + formattedTime)}>测试动态路由(Link跳转)</Link>
      <SignupForm />
    </div>
  );
}
