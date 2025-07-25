'use client'
import * as React from 'react';
import { Button } from '@mui/material';

export default function MyButton({ text, onClick }: { text: string, onClick?: () => void }) {
  return (
    <Button variant="contained" onClick={onClick}>{text}</Button>
  );
}