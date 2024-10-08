"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const luggageItems = [
  { id: 1, name: 'TravelPro Maxlite 5', brand: 'TravelPro', price: 159, rating: 4.5, features: ['Lightweight', 'Expandable', 'Spinner wheels'], image: 'https://picsum.photos/seed/luggage-1/300/200' },
  { id: 2, name: 'Samsonite Omni PC', brand: 'Samsonite', price: 129, rating: 4.3, features: ['Hardside', 'TSA lock', 'Scratch-resistant'], image: 'https://picsum.photos/seed/luggage-2/300/200' },
  { id: 3, name: 'Delsey Paris Helium Aero', brand: 'Delsey', price: 149, rating: 4.4, features: ['Double spinner wheels', 'Expandable', 'Glossy finish'], image: 'https://picsum.photos/seed/luggage-3/300/200' },
];

const brands = ['TravelPro', 'Samsonite', 'Delsey'];
const sizes = ['Carry-on', 'Medium', 'Large'];
const types = ['Softside', 'Hardside'];

export default function Luggage() {
  const [budget, setBudget] = useState([0, 300]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [size, setSize] = useState('');
  const [type, setType] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Luggage Recommendations</h1>

      {/* Key Factors */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Factors to Consider</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Size', description: 'Choose based on your travel needs and airline restrictions.' },
            { title: 'Durability', description: 'Look for sturdy materials and construction for long-lasting use.' },
            { title: 'Maneuverability', description: 'Consider spinner wheels for easy navigation through airports.' },
            { title: 'Security Features', description: 'TSA-approved locks can provide peace of mind during travel.' },
          ].map((factor, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{factor.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{factor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Filters and Recommendations */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button className="md:hidden mb-4">Refine Your Needs</Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetTitle>Filters</SheetTitle>
            <div className="py-4">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Budget</h3>
                  <Slider
                    min={0}
                    max={300}
                    step={10}
                    value={budget}
                    onValueChange={setBudget}
                  />
                  <div className="flex justify-between mt-2">
                    <span>${budget[0]}</span>
                    <span>${budget[1]}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Brands</h3>
                  {brands.map(brand => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => handleBrandChange(brand)}
                      />
                      <label htmlFor={brand}>{brand}</label>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-medium mb-2">Size</h3>
                  <RadioGroup value={size} onValueChange={setSize}>
                    {sizes.map(s => (
                      <div key={s} className="flex items-center space-x-2">
                        <RadioGroupItem value={s} id={s} />
                        <label htmlFor={s}>{s}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Type</h3>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select luggage type" />
                    </SelectTrigger>
                    <SelectContent>
                      {types.map(t => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Filters */}
        <div className="hidden md:block w-1/4">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Budget</h3>
              <Slider
                min={0}
                max={300}
                step={10}
                value={budget}
                onValueChange={setBudget}
              />
              <div className="flex justify-between mt-2">
                <span>${budget[0]}</span>
                <span>${budget[1]}</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Brands</h3>
              {brands.map(brand => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => handleBrandChange(brand)}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <RadioGroup value={size} onValueChange={setSize}>
                {sizes.map(s => (
                  <div key={s} className="flex items-center space-x-2">
                    <RadioGroupItem value={s} id={s} />
                    <label htmlFor={s}>{s}</label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div>
              <h3 className="font-medium mb-2">Type</h3>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select luggage type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map(t => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recommended Luggage</h2>
            <div className="text-sm">
              <span className="font-medium">100</span> Total Models |{' '}
              <span className="font-medium">3</span> Recommended
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {luggageItems.map(item => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold">${item.price}</span>
                    <span className="text-sm">★ {item.rating}</span>
                  </div>
                  <ul className="text-sm mb-4">
                    {item.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                  <Button className="w-full">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Amazing Fact */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Did You Know?</h2>
        <p>The world's largest piece of luggage is over 20 feet long and weighs more than 2,500 pounds!</p>
      </div>
    </div>
  );
}