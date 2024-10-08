import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner */}
      <div className="relative bg-gray-100 p-8 rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">Perfect Match</h1>
        <p className="text-xl mb-6">See why our recommendation is ideal for you and love your new product</p>
        <div className="flex justify-between items-center">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Product Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/washing-machines">
            <Card>
              <CardContent className="p-6">
                <Image
                  src="https://picsum.photos/seed/washing-machine/400/300"
                  alt="Washing Machines"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">Washing Machines</h3>
                <p>Find the perfect washing machine for your home!</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/luggage">
            <Card>
              <CardContent className="p-6">
                <Image
                  src="https://picsum.photos/seed/luggage/400/300"
                  alt="Luggage"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">Luggage</h3>
                <p>Discover the ideal luggage for your travels!</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Latest News */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Top 10 Washing Machine Features', image: 'https://picsum.photos/seed/washing-features/400/300', description: 'Discover the must-have features for your next washing machine...' },
            { title: 'Luggage Trends for 2024', image: 'https://picsum.photos/seed/luggage-trends/400/300', description: 'Stay ahead of the curve with these upcoming luggage trends...' },
            { title: 'Eco-Friendly Laundry Tips', image: 'https://picsum.photos/seed/eco-laundry/400/300', description: 'Learn how to reduce your environmental impact while doing laundry...' },
          ].map((article, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600">{article.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why LoveBuy */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Why Choose LoveBuy?</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg">
              LoveBuy is your trusted companion in finding the perfect products tailored to your needs. 
              Our advanced recommendation system considers your preferences, lifestyle, and budget to 
              suggest the best options. With LoveBuy, you can shop with confidence, knowing that every 
              recommendation is personalized just for you.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}