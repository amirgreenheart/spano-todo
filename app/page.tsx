'use client'
import * as React from 'react';
import { Button,Box } from "@mui/material";
import TodoList from "@/page-component/TodoList";
import Link from 'next/link';
import UiButton from '@/components/ui/matrialUi/Button';
export default function Home() {
  return (
    <React.Fragment>
      <Box sx={{ mt: 10 , mx:5 }} >
        <UiButton children="افزودن" link='/create'/>
        <TodoList/>
      </Box>
    </React.Fragment>
  )
}
