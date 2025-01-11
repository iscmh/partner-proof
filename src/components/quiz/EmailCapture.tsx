import React, { useState } from 'react';
import { Mail, Lock, AlertCircle } from 'lucide-react';

interface EmailCaptureProps {
  onSubmit: (email: string) => void;
  error?: string;
}

export const EmailCapture = ({ onSubmit, error }: EmailCaptureProps) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [showConsentError, setShowConsentError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setShowConsentError(true);
      return;
    }
    setShowConsentError(false);
    onSubmit(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <Lock className="w-8 h-8 text-[#8A2BE2]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Get Your Detailed Analysis
          </h2>
          <p className="text-gray-600">
            Enter your email to receive your comprehensive infidelity risk assessment
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A2BE2] focus:border-[#8A2BE2]"
              required
            />
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-sm text-gray-600">
              I agree to the collection and processing of my quiz responses and personal information as described in the Privacy Policy. I understand this data may be used for analysis and service improvement.
            </label>
          </div>

          {showConsentError && (
            <div className="flex items-center text-red-500 text-sm">
              <AlertCircle className="w-4 h-4 mr-2" />
              Please agree to the data collection policy to continue
            </div>
          )}

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#8A2BE2] text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105"
          >
            Continue
          </button>
        </form>

        <p className="mt-4 text-xs text-center text-gray-500">
          We respect your privacy and will never share your email
        </p>
      </div>
    </div>
  );
};