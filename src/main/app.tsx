import { QueryClientProvider } from 'react-query'
import { client } from './config'
import { AppRoutes } from './routes/routes'
import { Toaster } from 'react-hot-toast'
import { globalStyles } from '~/presentation/themes/global'

export function App () {
  globalStyles()
  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
      <Toaster position='bottom-right' />
    </QueryClientProvider>
  )
}
