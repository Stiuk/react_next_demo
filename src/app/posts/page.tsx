'use client'
import ComboBox from "@/components/autoCompleteTextField";
import MyButton from "@/components/myButton";
import { redirect }  from "next/navigation";

export default function Page () {
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
      <MyButton onClick={ () => redirect(encodeURI("/posts/测试动态路由" + formattedTime))} text="测试动态路由(Router跳转)"/>
      <ComboBox />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">内容 1</div>
        <div className="bg-white p-4 shadow rounded">内容 2</div>
        <div className="bg-white p-4 shadow rounded">内容 3</div>
        <div className="bg-white p-4 shadow rounded">内容 3</div>
        <div className="bg-white p-4 shadow rounded">内容 3</div>
        <div className="bg-white p-4 shadow rounded">内容 3</div>
        <div className="bg-white p-4 shadow rounded">内容 3</div>
        <div className="bg-white p-4 shadow rounded">内容 3</div>
      </div>
    </div>
  )
}