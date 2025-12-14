import { Navigation } from '@/components/restaurant/Navigation';
import { Footer } from '@/components/restaurant/Footer';
import { MenuCard } from '@/components/restaurant/MenuCard';

export default function Menu() {
  const appetizers = [
    {
      name: 'Bruschetta al Pomodoro',
      description: 'Toasted artisan bread topped with marinated tomatoes, fresh basil, and extra virgin olive oil',
      price: '12',
      image: '/generated/appetizers.jpg',
      dietary: ['Vegetarian']
    },
    {
      name: 'Burrata e Prosciutto',
      description: 'Creamy burrata cheese with aged prosciutto di Parma, arugula, and balsamic reduction',
      price: '16',
      image: '/generated/appetizers.jpg',
      dietary: ['Gluten-Free']
    },
    {
      name: 'Calamari Fritti',
      description: 'Lightly fried calamari served with spicy marinara and lemon aioli',
      price: '14',
      image: '/generated/appetizers.jpg',
      dietary: []
    }
  ];

  const mainCourses = [
    {
      name: 'Truffle Risotto',
      description: 'Creamy arborio rice infused with white wine, finished with generous shavings of black truffle and aged parmesan',
      price: '28',
      image: '/generated/truffle-risotto.jpg',
      dietary: ['Vegetarian', 'Gluten-Free']
    },
    {
      name: 'Pan-Seared Salmon',
      description: 'Atlantic salmon with perfectly crispy skin, served with seasonal roasted vegetables and lemon herb butter',
      price: '32',
      image: '/generated/pan-seared-salmon.jpg',
      dietary: ['Gluten-Free']
    },
    {
      name: 'Osso Buco',
      description: 'Braised veal shanks in white wine and vegetables, served over saffron risotto',
      price: '36',
      image: '/generated/truffle-risotto.jpg',
      dietary: ['Gluten-Free']
    },
    {
      name: 'Linguine alle Vongole',
      description: 'Fresh linguine with Manila clams, white wine, garlic, and parsley',
      price: '26',
      image: '/generated/appetizers.jpg',
      dietary: []
    },
    {
      name: 'Bistecca Fiorentina',
      description: 'Grilled T-bone steak with rosemary, served with roasted potatoes and seasonal vegetables',
      price: '42',
      image: '/generated/pan-seared-salmon.jpg',
      dietary: ['Gluten-Free']
    },
    {
      name: 'Eggplant Parmigiana',
      description: 'Layers of breaded eggplant with tomato sauce, mozzarella, and parmesan, baked to perfection',
      price: '24',
      image: '/generated/truffle-risotto.jpg',
      dietary: ['Vegetarian']
    }
  ];

  const desserts = [
    {
      name: 'Tiramisu Classico',
      description: 'Traditional Italian dessert with espresso-soaked ladyfingers, mascarpone cream, and cocoa',
      price: '10',
      image: '/generated/appetizers.jpg',
      dietary: ['Vegetarian']
    },
    {
      name: 'Panna Cotta',
      description: 'Silky vanilla cream with seasonal berry compote',
      price: '9',
      image: '/generated/appetizers.jpg',
      dietary: ['Vegetarian', 'Gluten-Free']
    },
    {
      name: 'Cannoli Siciliani',
      description: 'Crispy pastry shells filled with sweet ricotta cream and chocolate chips',
      price: '11',
      image: '/generated/appetizers.jpg',
      dietary: ['Vegetarian']
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Menu
            </h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Savor the finest Italian cuisine, crafted with passion and presented with elegance. Each dish tells a story of tradition, innovation, and the pursuit of culinary excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Appetizers */}
      <section className="py-16 bg-[hsl(var(--card))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Antipasti
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Begin your journey with our curated starters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appetizers.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Courses */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Main Courses
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Our signature entrees showcase the best of Italian cuisine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainCourses.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Desserts */}
      <section className="py-16 bg-[hsl(var(--card))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Dolci
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Sweet endings to your perfect meal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {desserts.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Wine & Beverages Note */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Wine & Beverages
            </h3>
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-4">
              Complement your meal with our carefully curated selection of Italian wines, craft cocktails, and artisanal beverages.
            </p>
            <p className="text-[hsl(var(--muted-foreground))]">
              Ask your server for our complete wine list and cocktail menu.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
