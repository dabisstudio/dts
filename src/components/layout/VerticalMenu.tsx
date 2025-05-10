import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

interface MenuItem {
  title: string;
  path: string;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  {
    title: 'What We Deliver',
    path: '/services',
    submenu: [
      { title: 'Product & Service Design', path: '/services/product-service-design' },
      { title: 'Branded Experience Design', path: '/services/branded-experience' },
      { title: 'Research & Development', path: '/services/research-development' }
    ]
  },
  { title: 'Work', path: '/work' },
  { title: 'Insights', path: '/insights' },
  { title: 'Contact', path: '/contact' }
];

export default function VerticalMenu() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Determine if menu item is active
  const isActive = (path: string) => {
    if (path === '/') {
      return router.pathname === path;
    }
    return router.pathname.startsWith(path);
  };

  // Toggle submenu
  const toggleSubmenu = (path: string) => {
    setExpandedItem(expandedItem === path ? null : path);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // GSAP animation for logo on page load
  useEffect(() => {
    const logoAnimation = gsap.timeline();
    logoAnimation.from('.logo', {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.5
    });
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 w-full bg-charcoal z-50 md:hidden">
        <div className="flex justify-between items-center px-6 py-4">
          <Link href="/" className="logo">
            <img src="/logo.svg" alt="DabisStudio" className="h-8" />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-offwhite focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Vertical Menu - Desktop */}
      <nav className="fixed top-0 left-0 h-full w-menu-width bg-charcoal z-40 hidden md:block">
        <div className="py-8 px-6">
          <Link href="/" className="logo block mb-12">
            <img src="/logo.svg" alt="DabisStudio" className="h-10" />
          </Link>

          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.path)}
                      className={`vertical-menu-item flex justify-between items-center w-full ${isActive(item.path) ? 'active' : ''}`}
                    >
                      <span>{item.title}</span>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-electric-blue"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ rotate: expandedItem === item.path ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {expandedItem === item.path && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                          className="pl-4 overflow-hidden"
                        >
                          {item.submenu.map((subItem) => (
                            <li key={subItem.path}>
                              <Link
                                href={subItem.path}
                                className={`vertical-menu-item text-sm ${isActive(subItem.path) ? 'active' : ''}`}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`vertical-menu-item ${isActive(item.path) ? 'active' : ''}`}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-charcoal/90 z-30 md:hidden"
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 right-0 h-full w-4/5 bg-charcoal z-40 pt-20 px-6"
            >
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(item.path)}
                          className={`vertical-menu-item flex justify-between items-center w-full ${isActive(item.path) ? 'active' : ''}`}
                        >
                          <span>{item.title}</span>
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-electric-blue"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={{ rotate: expandedItem === item.path ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>

                        <AnimatePresence>
                          {expandedItem === item.path && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                              className="pl-4 overflow-hidden"
                            >
                              {item.submenu.map((subItem) => (
                                <li key={subItem.path}>
                                  <Link
                                    href={subItem.path}
                                    className={`vertical-menu-item text-sm ${isActive(subItem.path) ? 'active' : ''}`}
                                  >
                                    {subItem.title}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className={`vertical-menu-item ${isActive(item.path) ? 'active' : ''}`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
