import { login } from "./actions"

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ error?: string }>
}) {
  const params = await searchParams

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#f8f5ef]">
      <form
        action={login}
        className="w-full max-w-md space-y-5 bg-white border border-neutral-200 p-8 shadow-sm"
      >
        <div>
          <h1 className="text-3xl font-serif text-neutral-950">
            Aureus Law Login
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Sign in to access the admin dashboard.
          </p>
        </div>

        {params?.error && (
          <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
            {params.error}
          </p>
        )}

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-800">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
            placeholder="admin@aureuslaw.mv"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-800">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-neutral-950 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Sign in
        </button>
      </form>
    </main>
  )
}