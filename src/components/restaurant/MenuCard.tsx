import Image from 'next/image';

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  dietary?: string[];
}

export function MenuCard({ name, description, price, image, dietary = [] }: MenuCardProps) {
  return (
    <div className="bg-[hsl(var(--card))] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]" style={{ fontFamily: 'var(--font-heading)' }}>
            {name}
          </h3>
          <span className="text-[hsl(var(--primary))] font-bold text-lg">
            ${price}
          </span>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] mb-3">
          {description}
        </p>
        {dietary.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {dietary.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
