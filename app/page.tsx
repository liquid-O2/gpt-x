import '../styles/globals.css'
import ChatBox from './components/ChatBox'
import Container from './components/Container'
import ContextProvider from './components/ContextProvider'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <main className='h-screen w-screen max-h-screen'>
      <ContextProvider>
        <Container className='grid gap-x-4 grid-cols-1 md:grid-cols-[0.25fr_1fr] h-full'>
          <Sidebar />
          <ChatBox />
        </Container>
      </ContextProvider>
    </main>
  )
}
