'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Toggle dark mode and update document class.
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Automatically close the mobile menu on route change.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-600">
          Hustle | AI
        </Link>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex lg:space-x-6 lg:mr-32">
            {navLinks.map((link) => (
              <li key={link.href} className="my-2 lg:my-0">
                <Link
                  href={link.href}
                  className={`block px-4 py-2 rounded-lg transition-all ${
                    pathname === link.href
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-blue-100 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle Button with a custom icon */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {darkMode ? (
              // Sun icon for light mode (dark mode is active)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm5.657 2.343a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414zM21 11a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2h2zm-2.343 5.657a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 1.414-1.414l1.414 1.414zM13 21a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0v2zm-5.657-2.343a1 1 0 0 1-1.414-1.414L7.343 16.93a1 1 0 0 1 1.414 1.414l-1.414 1.414zM3 13a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2H3zm2.343-5.657a1 1 0 0 1 1.414-1.414L8.171 5.343A1 1 0 0 1 6.757 6.757L5.343 5.343z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              // Moon icon for dark mode (light mode is active)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="lg:hidden text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                // Close icon when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when menu is closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Modal Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-start justify-center pt-12"
          onClick={toggleMenu}
        >
          <div
            className="bg-white dark:bg-gray-800 w-11/12 max-w-md p-8 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="text-blue-600 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="mt-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className={`block px-4 py-2 rounded-lg transition-all ${
                      pathname === link.href
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-800 dark:text-gray-200 hover:bg-blue-100 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
