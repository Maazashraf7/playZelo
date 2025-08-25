import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="font-semibold text-lg">Playzelo</a>
          <nav className="flex gap-4 text-sm">
            <a href="/" className="hover:underline">Home</a>
            <a href="/game-list" className="hover:underline">Games</a>
            <a href="/login" className="hover:underline">Login</a>
            <a href="/signup" className="hover:underline">Sign Up</a>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Playzelo. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
