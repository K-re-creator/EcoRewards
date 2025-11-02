export function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none space-y-6">
          <section>
            <h2>Introduction</h2>
            <p className="text-gray-700">
              EcoRewards ("we", "our", or "us") is committed to protecting your privacy. This Privacy 
              Policy explains how we collect, use, disclose, and safeguard your information when you 
              use our application.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p className="text-gray-700">We may collect personal information that you provide to us, including:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Name and email address</li>
              <li>Account credentials</li>
              <li>Location data (when you choose to share it)</li>
              <li>Photos of your eco-activities</li>
              <li>Activity history and points balance</li>
            </ul>

            <h3 className="mt-4">Usage Data</h3>
            <p className="text-gray-700">
              We automatically collect certain information when you use EcoRewards, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Device information</li>
              <li>Log data and usage patterns</li>
              <li>Interaction with features and content</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p className="text-gray-700">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Provide, maintain, and improve our services</li>
              <li>Calculate and award eco points</li>
              <li>Process reward redemptions</li>
              <li>Send you notifications about your activities and rewards</li>
              <li>Provide customer support</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Prevent fraud and ensure platform security</li>
            </ul>
          </section>

          <section>
            <h2>Data Sharing and Disclosure</h2>
            <p className="text-gray-700">We may share your information with:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Partner Organizations:</strong> Collection points and reward providers (limited to necessary transaction data)</li>
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our platform</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal 
              information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p className="text-gray-700">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section>
            <h2>Important Note</h2>
            <p className="text-gray-700 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <strong>Please note:</strong> EcoRewards is not designed for collecting personally 
              identifiable information (PII) or securing highly sensitive data. Please do not share 
              sensitive personal information through the platform beyond what is required for basic 
              account functionality.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: privacy@ecorewards.com
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Last Updated: November 2, 2025
          </p>
        </div>
      </div>
    </div>
  );
}
