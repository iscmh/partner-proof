import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "This quiz helped us identify areas we needed to work on. Now our relationship is stronger than ever!",
    author: "Sarah & Mike",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=200&h=200&fit=crop"
  },
  {
    text: "The insights were spot-on! It was like having a relationship counselor in our pocket.",
    author: "James & Emily",
    image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=200&h=200&fit=crop"
  },
  {
    text: "Taking this quiz together sparked meaningful conversations we needed to have.",
    author: "Alex & Jordan",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop"
  }
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Couples Say
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-pink-50 rounded-lg p-8 relative">
                    <Quote className="absolute top-4 left-4 text-pink-200" size={32} />
                    <div className="text-center">
                      <p className="text-lg text-gray-700 mb-6 pt-8">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <span className="font-medium text-gray-900">
                          {testimonial.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-pink-50"
          >
            <ChevronLeft className="text-gray-600" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-pink-50"
          >
            <ChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}