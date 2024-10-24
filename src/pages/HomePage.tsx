import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { softwareData } from '../data/softwareData';
import { SoftwareCard } from '../components/SoftwareCard';

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredSoftware = softwareData.filter(software =>
    software.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    software.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative mb-12">
        <input
          type="text"
          placeholder="Buscar software libre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 text-lg rounded-full shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
        />
        <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSoftware.map((software) => (
          <SoftwareCard key={software.id} software={software} />
        ))}
      </div>
    </div>
  );
}