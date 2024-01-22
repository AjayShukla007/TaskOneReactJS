import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Form from './components/form/Form.tsx';
import DataTableComponent from './components/data/UserTable.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className="thanksTo">Onito Tech</h1>
      <Form/>
      <DataTableComponent/>
    </div>
    </>
  )
}

export default App
