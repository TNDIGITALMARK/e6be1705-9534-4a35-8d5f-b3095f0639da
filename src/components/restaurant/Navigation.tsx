'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--background))] border-b border-[hsl(var(--border))] backdrop-blur-md bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-bold text-[hsl(var(--primary))] transition-all group-hover:scale-105" style={{ fontFamily: 'var(--font-heading)' }}>
              Bella Vista
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium"
            >
              Menu
            </Link>
            <Link
              href="/reservations"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium"
            >
              Reservations
            </Link>
            <Link
              href="/reservations"
              className="px-6 py-3 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg font-semibold hover:shadow-gold transition-all hover:scale-105"
            >
              Book Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[hsl(var(--foreground))]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[hsl(var(--border))]">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium py-2"
              >
                Home
              </Link>
              <Link
                href="/menu"
                onClick={() => setIsOpen(false)}
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium py-2"
              >
                Menu
              </Link>
              <Link
                href="/reservations"
                onClick={() => setIsOpen(false)}
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium py-2"
              >
                Reservations
              </Link>
              <Link
                href="/reservations"
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg font-semibold text-center"
              >
                Book Table
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
