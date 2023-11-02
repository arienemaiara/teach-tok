import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { MainNavigator } from '@/navigation'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigator />
    </QueryClientProvider>
  )
}

export default App
