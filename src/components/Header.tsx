import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-8 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
          <GraduationCap size={48} className="text-blue-300" />
          <div>
            <h1 className="text-3xl font-bold">Universidad ECCI</h1>
            <h2 className="text-xl text-blue-200">Consultoría de Software Libre</h2>
          </div>
        </Link>
      </div>
    </header>
  );
}