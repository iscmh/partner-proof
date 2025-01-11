import React, { useState } from 'react';
import { User, MapPin, Calendar, Heart } from 'lucide-react';

interface UserProfileProps {
  onSubmit: (data: UserProfileData) => void;
}

export interface UserProfileData {
  age: number;
  gender: string;
  relationshipStatus: string;
  location: string;
  relationshipDuration: string;
}

export const UserProfile = ({ onSubmit }: UserProfileProps) => {
  const [formData, setFormData] = useState<UserProfileData>({
    age: 25,
    gender: '',
    relationshipStatus: '',
    location: '',
    relationshipDuration: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8A2BE2] focus:border-[#8A2BE2]";

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <User className="w-8 h-8 text-[#8A2BE2]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            One Last Step
          </h2>
          <p className="text-gray-600">
            Help us provide more accurate insights
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Age</label>
            <input
              type="number"
              min="18"
              max="100"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
              className={inputClasses}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Gender</label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              className={inputClasses}
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Status</label>
            <select
              value={formData.relationshipStatus}
              onChange={(e) => setFormData({ ...formData, relationshipStatus: e.target.value })}
              className={inputClasses}
              required
            >
              <option value="">Select status</option>
              <option value="dating">Dating</option>
              <option value="engaged">Engaged</option>
              <option value="married">Married</option>
              <option value="complicated">It's Complicated</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="City, Country"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className={`${inputClasses} pl-10`}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">How Long Together?</label>
            <select
              value={formData.relationshipDuration}
              onChange={(e) => setFormData({ ...formData, relationshipDuration: e.target.value })}
              className={inputClasses}
              required
            >
              <option value="">Select duration</option>
              <option value="0-6">Less than 6 months</option>
              <option value="6-12">6-12 months</option>
              <option value="1-2">1-2 years</option>
              <option value="2-5">2-5 years</option>
              <option value="5+">More than 5 years</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8A2BE2] text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105 flex items-center justify-center"
          >
            <Heart className="w-5 h-5 mr-2" />
            Continue to Results
          </button>
        </form>
      </div>
    </div>
  );
};