import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">404 - Not Found</h1>
      <p className="mt-2 text-gray-600">The page you are looking for does not exist.</p>
      <Link className="text-blue-600 underline mt-4 inline-block" to="/">Go home</Link>
    </section>
  )
}

