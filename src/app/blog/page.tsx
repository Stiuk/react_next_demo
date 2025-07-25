import DelayTest from '@/components/delayTest';
import * as React from 'react';
import { Suspense } from 'react';

export default function Page() {
  const posts = 
    new Promise<{ id: string; title: string; }[]>((resolve) => {
    setTimeout(() => resolve([{ id: '1', title: 'Hello' }, { id: '2', title: 'World' }]), 3000);
  });
  return (
    <Suspense fallback={<div className='flex flex-col items-center justify-center'>加载中</div>}>
      <DelayTest posts={posts} />
    </Suspense>
  )
}