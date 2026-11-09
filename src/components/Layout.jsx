import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

// Header e Footer aparecem em todas as telas.
// A página da rota atual entra no lugar do <Outlet />.
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
