import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-8 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Privacy Policy</h1>
        
        <div className="prose prose-pink max-w-none">
          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Data Collection and Commercial Use</h2>
            <p className="text-gray-700 mb-4">
              We collect and store information when you use our relationship assessment service. This data may be sold to third parties for commercial purposes, including but not limited to marketing, research, and analysis.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Email address</li>
              <li>Personal information (age, gender, location)</li>
              <li>Relationship details (status, duration)</li>
              <li>Quiz responses and results</li>
              <li>Usage data and interaction patterns</li>
              <li>Assessment scores and risk levels</li>
            </ul>
            <p className="text-gray-700">
              By using our service, you explicitly consent to the collection, storage, and potential sale of your data to third parties.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Data Usage and Sharing</h2>
            <p className="text-gray-700 mb-4">
              Your data may be:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Sold to third-party companies for commercial purposes</li>
              <li>Used for targeted advertising and marketing</li>
              <li>Shared with research institutions and relationship experts</li>
              <li>Analyzed to improve our services and develop new products</li>
              <li>Combined with other data for market research and analysis</li>
            </ul>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Your Rights</h2>
            <p className="text-gray-700">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Access your stored data</li>
              <li>Request data deletion</li>
              <li>Opt-out of future data collection</li>
              <li>Receive information about how your data is used</li>
            </ul>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Contact Us</h2>
            <p className="text-gray-700">
              For any privacy-related questions or to exercise your data rights, please contact our privacy team at isaacmihai7@gmail.com
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Updates to Privacy Policy</h2>
            <p className="text-gray-700">
              We reserve the right to update this privacy policy at any time. Continued use of our service after changes constitutes acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};