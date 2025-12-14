import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--card))] border-t border-[hsl(var(--border))] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Bella Vista
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-4">
              Contemporary Italian cuisine crafted with passion and presented with elegance.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-[hsl(var(--muted-foreground))]">
              <p>425 Oak Street, Downtown</p>
              <p>Phone: (555) 123-4567</p>
              <p>info@bellavista.com</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">
              Hours
            </h4>
            <div className="space-y-2 text-[hsl(var(--muted-foreground))]">
              <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
              <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
              <p>Sunday: 4:00 PM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[hsl(var(--border))] text-center text-[hsl(var(--muted-foreground))]">
          <p>&copy; 2024 Bella Vista Italian Bistro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
