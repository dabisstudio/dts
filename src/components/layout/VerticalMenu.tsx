'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronUp } from 'lucide-react'

type MenuItem = {
  title: string
  path: string
  submenu?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'What We Deliver',
    path: '/services',
    submenu: [
      {
        title: 'Strategy',
        path: '/services/strategy',
      },
      {
        title: 'Design',
        path: '/services/design',
      },
      {
        title: 'Development',
        path: '/services/development',
      },
    ],
  },
  {
    title: 'Work',
    path: '/work',
  },
  {
    title: 'Insights',
    path: '/insights',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
]

export default function VerticalMenu() {
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  return (
    <nav className="vertical-menu">
      <div className="mb-12">
        <Link href="/" className="block">
          <h1 className="text-2xl font-bold">DabisStudio</h1>
        </Link>
      </div>

      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.title} className="relative">
            {item.submenu ? (
              <>
                <button
                  onClick={() => toggleSubmenu(item.title)}
                  className={`flex items-center justify-between w-full py-2 text-left ${
                    pathname.startsWith(item.path) ? 'text-electric-blue font-medium' : 'text-off-white'
                  }`}
                >
                  <span>{item.title}</span>
                  {openSubmenu === item.title ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {openSubmenu === item.title && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.title}>
                        <Link
                          href={subItem.path}
                          className={`block py-1 ${
                            pathname === subItem.path ? 'text-electric-blue font-medium' : 'text-off-white'
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                href={item.path}
                className={`block py-2 ${
                  pathname === item.path ? 'text-electric-blue font-medium' : 'text-off-white'
                }`}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
