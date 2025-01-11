import React from 'react';
import { ClipboardList, LineChart, Heart } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Answer Questions',
    description: 'Share details about your relationship journey',
  },
  {
    icon: LineChart,
    title: 'Get Analysis',
    description: 'Receive a detailed relationship assessment',
  },
  {
    icon: Heart,
    title: 'Strengthen Bond',
    description: 'Learn actionable ways to improve your connection',
  },
];

export const Process = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-pink-200" />
              )}
              <div className="relative flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6">
                  <step.icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-center text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}