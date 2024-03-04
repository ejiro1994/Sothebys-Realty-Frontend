import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Header/Hero'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
