import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[7.5rem] lg:pt-[8.5rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
