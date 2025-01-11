import React from 'react';
import { Brain, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Scientifically Backed',
    description: 'Based on relationship psychology and expert research',
  },
  {
    icon: Clock,
    title: 'Quick & Fun',
    description: 'Complete in just 2 minutes',
  },
  {
    icon: Heart,
    title: 'Personalized Insights',
    description: 'Get tailored advice for your unique relationship',
  },
];

export const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Take Our Quiz?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 text-center transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-pink-100 rounded-full group-hover:bg-pink-200 transition-colors">
                <feature.icon className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}