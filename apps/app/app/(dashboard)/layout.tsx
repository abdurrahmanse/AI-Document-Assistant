'use client'

import { useAuthStore } from '@/lib/store/auth'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { removeAuthTokens } from '@/app/actions/auth'
import { Button } from '@workspace/ui/components/ui'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, logout } = useAuthStore()
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    await removeAuthTokens()
    logout()
    router.push('/login')
  }

  const navItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Documents', href: '/documents' },
    { name: 'Search', href: '/search' },
    { name: 'Chat', href: '/chat' },
    { name: 'Settings', href: '/settings' },
  ]

  return (
    <div className="flex h-screen w-full flex-col md:flex-row bg-zinc-50 dark:bg-zinc-950">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col h-16 md:h-full shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-zinc-200 dark:border-zinc-800 shrink-0">
          <h1 className="font-bold text-lg">AI Doc Assistant</h1>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 hidden md:block">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${pathname === item.href || pathname.startsWith(item.href + '/')
                      ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50'
                      : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-50'
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 hidden md:block shrink-0">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium truncate pr-2">
              {user?.first_name ? `${user.first_name} ${user.last_name}` : user?.email}
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="h-full p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
