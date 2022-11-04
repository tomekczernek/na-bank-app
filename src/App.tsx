import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

export default function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Dashboard />
      <Footer />
    </QueryClientProvider>
  )
}
