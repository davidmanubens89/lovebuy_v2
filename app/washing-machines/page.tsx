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

const washingMachines = [
  { id: 1, name: 'EcoWash Pro', brand: 'GreenTech', price: 599, rating: 4.5, features: ['Energy efficient', 'Large capacity', 'Smart controls'], image: 'https://picsum.photos/seed/washing-machine-1/300/200' },
  { id: 2, name: 'SpeedMaster 3000', brand: 'QuickClean', price: 499, rating: 4.2, features: ['Quick wash cycles', 'Compact design', 'Multiple wash programs'], image: 'https://picsum.photos/seed/washing-machine-2/300/200' },
  { id: 3, name: 'SilentWash Elite', brand: 'WhisperAppliances', price: 699, rating: 4.7, features: ['Ultra-quiet operation', 'Steam cleaning', 'Anti-vibration technology'], image: 'https://picsum.photos/seed/washing-machine-3/300/200' },
];

const brands = ['GreenTech', 'QuickClean', 'WhisperAppliances'];
const capacities = ['Small (< 6kg)', 'Medium (6-8kg)', 'Large (> 8kg)'];
const energyRatings = ['A+++', 'A++', 'A+', 'A'];

export default function WashingMachines() {
  const [budget, setBudget] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [capacity, setCapacity] = useState('');
  const [energyRating, setEnergyRating] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Washing Machine Recommendations</h1>

      {/* Key Factors */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Factors to Consider</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Capacity', description: 'Choose based on your laundry volume and family size.' },
            { title: 'Energy Efficiency', description: 'Look for high energy ratings to save on bills and reduce environmental impact.' },
            { title: 'Wash Programs', description: 'Consider machines with cycles that match your laundry needs.' },
            { title: 'Noise Level', description: 'Important if the machine will be near living areas.' },
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
                    max={1000}
                    step={50}
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
                  <h3 className="font-medium mb-2">Capacity</h3>
                  <RadioGroup value={capacity} onValueChange={setCapacity}>
                    {capacities.map(cap => (
                      <div key={cap} className="flex items-center space-x-2">
                        <RadioGroupItem value={cap} id={cap} />
                        <label htmlFor={cap}>{cap}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Energy Rating</h3>
                  <Select value={energyRating} onValueChange={setEnergyRating}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select energy rating" />
                    </SelectTrigger>
                    <SelectContent>
                      {energyRatings.map(rating => (
                        <SelectItem key={rating} value={rating}>{rating}</SelectItem>
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
                max={1000}
                step={50}
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
              <h3 className="font-medium mb-2">Capacity</h3>
              <RadioGroup value={capacity} onValueChange={setCapacity}>
                {capacities.map(cap => (
                  <div key={cap} className="flex items-center space-x-2">
                    <RadioGroupItem value={cap} id={cap} />
                    <label htmlFor={cap}>{cap}</label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div>
              <h3 className="font-medium mb-2">Energy Rating</h3>
              <Select value={energyRating} onValueChange={setEnergyRating}>
                <SelectTrigger>
                  <SelectValue placeholder="Select energy rating" />
                </SelectTrigger>
                <SelectContent>
                  {energyRatings.map(rating => (
                    <SelectItem key={rating} value={rating}>{rating}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recommended Washing Machines</h2>
            <div className="text-sm">
              <span className="font-medium">150</span> Total Models |{' '}
              <span className="font-medium">3</span> Recommended
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {washingMachines.map(machine => (
              <Card key={machine.id}>
                <CardContent className="p-4">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold mb-2">{machine.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{machine.brand}</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold">${machine.price}</span>
                    <span className="text-sm">★ {machine.rating}</span>
                  </div>
                  <ul className="text-sm mb-4">
                    {machine.features.map((feature, index) => (
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
        <p>The world's largest washing machine can wash up to 100kg of laundry in a single cycle!</p>
      </div>
    </div>
  );
}