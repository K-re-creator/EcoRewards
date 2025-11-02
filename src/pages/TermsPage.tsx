export function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none space-y-6">
          <section>
            <h2>Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using EcoRewards, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </section>

          <section>
            <h2>Use of Service</h2>
            <p className="text-gray-700">
              EcoRewards provides a platform to log eco-friendly activities, earn points, and 
              redeem rewards. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Provide accurate information about your activities</li>
              <li>Not submit fraudulent or duplicate activities</li>
              <li>Not abuse the points or rewards system</li>
              <li>Respect other users and partners</li>
            </ul>
          </section>

          <section>
            <h2>Points and Rewards</h2>
            <p className="text-gray-700">
              Points are awarded based on verified eco-activities. EcoRewards reserves the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Verify submitted activities before awarding points</li>
              <li>Adjust or revoke points for fraudulent activities</li>
              <li>Modify point calculation rules with notice</li>
              <li>Change or discontinue rewards offerings</li>
            </ul>
          </section>

          <section>
            <h2>Account Responsibilities</h2>
            <p className="text-gray-700">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2>Content</h2>
            <p className="text-gray-700">
              By uploading photos or content to EcoRewards, you grant us a non-exclusive license 
              to use, display, and distribute that content for promotional purposes.
            </p>
          </section>

          <section>
            <h2>Termination</h2>
            <p className="text-gray-700">
              We reserve the right to suspend or terminate accounts that violate these terms or 
              engage in fraudulent activity.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p className="text-gray-700">
              EcoRewards is provided "as is" without warranties of any kind. We are not liable 
              for any damages arising from your use of the service.
            </p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p className="text-gray-700">
              We may modify these terms at any time. Continued use of the service constitutes 
              acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p className="text-gray-700">
              For questions about these terms, contact us at legal@ecorewards.com
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
