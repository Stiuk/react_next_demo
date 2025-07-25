'use client'
import * as React from 'react';
import { use } from 'react'

export default function DelayTest({posts}: {posts: Promise<{ id: string; title: string }[]>}) {
  const allPosts = use(posts)
  return (
    <ul className='flex flex-col items-center justify-center'>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}