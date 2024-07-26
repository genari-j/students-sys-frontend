import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { paths } from '~/main/config'
import { PrivateRoutes } from '~/main/routes/private-routes'

import { Header, Footer } from '~/presentation/components'
import {
  SignUp,
  SignIn,
  NotFound,
  Users,
  Classes,
  SolicitationReset
} from '~/presentation/pages'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Footer showFooterInformation={true} />}>
          <Route element={<Header showUserInformation={false} />}>
            <Route path={`${paths.signUp}`} element={<SignUp />} />
            <Route path={`${paths.signIn}`} element={<SignIn />} />
            <Route path={`${paths.notFound}`} element={<NotFound />} />
            <Route path={`${paths.solicitationReset}`} element={<SolicitationReset />} />
          </Route>

          <Route path={`${paths.signIn}`} element={<PrivateRoutes />}>
            <Route element={<Header showUserInformation={true} />}>
              <Route path={`${paths.users}`} element={<Users />} />
              <Route path={`${paths.classes}`} element={<Classes/>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}