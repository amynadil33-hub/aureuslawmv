import { login } from "./actions"

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { error?: string }
}) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <form action={login} className="w-full max-w-md space-y-4">
        <h1 className="text-3xl font-serif">Aureus Law Login</h1>

        {searchParams?.error && (
          <p className="text-sm text-red-600">{searchParams.error}</p>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full border px-4 py-3"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full border px-4 py-3"
        />

        <button className="w-full bg-black text-white px-4 py-3">
          Sign in
        </button>
      </form>
    </main>
  )
}