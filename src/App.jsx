import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Tasks, AddTask, NotFound } from './index'
import { ItemsProvider } from './ItemsContext'
import { ThemeProvider } from './ThemeContext'
import React from 'react'


export default function App() {

  return (
    <ThemeProvider>
      <ItemsProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/tasks/add' element={<AddTask />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </ItemsProvider>
    </ThemeProvider>
  )
}