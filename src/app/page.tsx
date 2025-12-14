import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/restaurant/Navigation';
import { Footer } from '@/components/restaurant/Footer';
import { Button } from '@/components/restaurant/Button';
import { TestimonialCard } from '@/components/restaurant/TestimonialCard';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-restaurant.jpg"
            alt="Bella Vista Restaurant Interior"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[hsl(var(--foreground))] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Bella Vista
          </h1>
          <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl mx-auto">
            Experience the artistry of contemporary Italian cuisine in an atmosphere of refined elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button variant="primary">
                View Menu
              </Button>
            </Link>
            <Link href="/reservations">
              <Button variant="outline">
                Book a Table
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              A Culinary Journey
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
              Located in the heart of downtown at 425 Oak Street, Bella Vista brings the authentic flavors of Italy to your table with a contemporary twist. Our passionate chefs craft each dish using the finest seasonal ingredients, honoring traditional techniques while embracing modern innovation.
            </p>
            <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              Whether you're celebrating a special occasion or seeking an unforgettable dining experience, our elegant atmosphere and exceptional service create the perfect setting for memorable moments.
            </p>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-20 bg-[hsl(var(--card))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Signature Creations
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Discover our chef's most celebrated dishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Truffle Risotto */}
            <div className="group">
              <div className="relative h-80 mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/generated/truffle-risotto.jpg"
                  alt="Truffle Risotto"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[hsl(var(--foreground))] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Truffle Risotto
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] mb-2">
                Creamy arborio rice infused with white wine, finished with generous shavings of black truffle and aged parmesan
              </p>
              <p className="text-[hsl(var(--primary))] font-bold text-xl">$28</p>
            </div>

            {/* Pan-Seared Salmon */}
            <div className="group">
              <div className="relative h-80 mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/generated/pan-seared-salmon.jpg"
                  alt="Pan-Seared Salmon"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[hsl(var(--foreground))] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Pan-Seared Salmon
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] mb-2">
                Atlantic salmon with perfectly crispy skin, served with seasonal roasted vegetables and lemon herb butter
              </p>
              <p className="text-[hsl(var(--primary))] font-bold text-xl">$32</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <Button variant="primary">
                Explore Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              What Our Guests Say
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Experiences that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              name="Sarah M."
              rating={5}
              review="Exceptional service and amazing food! The truffle risotto was the best I've ever had. The ambiance is perfect for a romantic evening."
            />
            <TestimonialCard
              name="Michael R."
              rating={5}
              review="Perfect anniversary dinner spot. From the warm greeting to the exquisite desserts, every detail was flawless. We'll definitely be back!"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[hsl(var(--card))]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Reserve Your Table
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience. Book your table today and discover why Bella Vista is the talk of the town.
          </p>
          <Link href="/reservations">
            <Button variant="primary">
              Make a Reservation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
