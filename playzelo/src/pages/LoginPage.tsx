export default function LoginPage() {
  return (
    <section className="max-w-md">
      <h1 className="text-2xl font-semibold">Login</h1>
      <form className="mt-4 space-y-4">
        <input className="w-full border rounded px-3 py-2" placeholder="Email" />
        <input className="w-full border rounded px-3 py-2" placeholder="Password" type="password" />
        <button className="px-4 py-2 rounded bg-blue-600 text-white">Sign in</button>
      </form>
    </section>
  )
}

