import { Navigation } from '@/components/restaurant/Navigation';
import { Footer } from '@/components/restaurant/Footer';
import { ReservationForm } from '@/components/restaurant/ReservationForm';

export default function Reservations() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Make a Reservation
            </h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Secure your table at Bella Vista and prepare for an unforgettable dining experience. We look forward to welcoming you.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form & Info */}
      <section className="py-12 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <ReservationForm />
            </div>

            {/* Information */}
            <div className="space-y-8">
              {/* Hours */}
              <div className="bg-[hsl(var(--card))] rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Hours of Operation
                </h3>
                <div className="space-y-3 text-[hsl(var(--foreground))]">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Thursday</span>
                    <span className="text-[hsl(var(--muted-foreground))]">5:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Friday - Saturday</span>
                    <span className="text-[hsl(var(--muted-foreground))]">5:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-[hsl(var(--muted-foreground))]">4:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-[hsl(var(--card))] rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Contact Us
                </h3>
                <div className="space-y-3 text-[hsl(var(--foreground))]">
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-[hsl(var(--muted-foreground))]">425 Oak Street, Downtown</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-[hsl(var(--muted-foreground))]">(555) 123-4567</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-[hsl(var(--muted-foreground))]">reservations@bellavista.com</p>
                  </div>
                </div>
              </div>

              {/* Special Notes */}
              <div className="bg-[hsl(var(--card))] rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Good to Know
                </h3>
                <ul className="space-y-3 text-[hsl(var(--muted-foreground))]">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Reservations are highly recommended, especially for weekends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Smart casual dress code appreciated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Private dining available for parties of 10 or more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Please notify us of any dietary restrictions in advance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[hsl(var(--card))]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Questions About Your Reservation?
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6 max-w-2xl mx-auto">
            Our team is here to help. Call us at (555) 123-4567 or email reservations@bellavista.com
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
