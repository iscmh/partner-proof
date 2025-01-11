import React from 'react';

export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-pink">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Usage Agreement</h2>
            <p className="text-gray-700 mb-4">
              By using our service, you explicitly agree that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>We may collect and store your quiz responses and relationship data</li>
              <li>Your anonymized data may be sold to third parties for commercial purposes</li>
              <li>We may use your data for research, analysis, and service improvement</li>
              <li>Your data may be shared with our commercial partners</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Rights</h2>
            <p className="text-gray-700 mb-4">
              As a user, you maintain the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Opt-out of future data collection</li>
              <li>Receive information about how your data is used</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations of Liability</h2>
            <p className="text-gray-700">
              Our quiz results are for entertainment and general information purposes only. We are not responsible for relationship decisions made based on quiz results.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};