import { FiExternalLink } from 'react-icons/fi';

const PrivacyPolicy = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white dark:text-white">Privacy Policy</h1>
          <p className="mt-4 text-lg text-white dark:text-white">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose max-w-none text-white dark:text-white">
          <p>
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit or interact with my portfolio website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white dark:text-white">1. Information I Collect</h2>
          <p>
            When you visit the website, I automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Web browser information</li>
            <li>IP address</li>
            <li>Time zone</li>
            <li>Cookies installed on your device</li>
          </ul>
          <p className="mt-4">
            Additionally, as you browse the site, I collect information about:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Individual web pages you view</li>
            <li>What websites or search terms referred you to the site</li>
            <li>How you interact with the site (clickstream data)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white dark:text-white">2. How I Use Your Information</h2>
          <p>
            I use the information I collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Provide and maintain the website</li>
            <li>Analyze how you use the website to improve user experience</li>
            <li>Communicate with you (if you've contacted me through the site)</li>
            <li>Monitor for potential risk and fraud</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white dark:text-white">3. Sharing Your Information</h2>
          <p>
            I share your Personal Information with third parties only to help me use your Personal Information, as described above. For example:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>
              <strong>Google Analytics:</strong> To understand how visitors use my site. You can read Google's privacy policy{' '}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 dark:text-white dark:hover:text-gray-300 inline-flex items-center underline"
              >
                here <FiExternalLink className="ml-1" size={14} />
              </a>.
            </li>
            <li>
              <strong>Vercel/Netlify:</strong> My hosting provider may collect server logs containing IP addresses.
            </li>
          </ul>
          <p className="mt-4">
            I may also share your Personal Information to comply with applicable laws and regulations or to respond to lawful requests for information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white dark:text-white">4. Cookies</h2>
          <p>
            Cookies are small data files that are placed on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of my site.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white dark:text-white">5. Your Rights</h2>
          <p>
            If you are a European resident, you have the right to access personal information I hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact me.
          </p>
          <p className="mt-4">
            Additionally, if you are a European resident, note that I may be processing your information to pursue my legitimate business interests listed above.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white dark:text-white">6. Data Retention</h2>
          <p>
            I will maintain your Information for my records unless and until you ask me to delete this information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white dark:text-white">7. Changes</h2>
          <p>
            I may update this privacy policy from time to time to reflect changes to my practices or for other operational, legal, or regulatory reasons.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white dark:text-white">8. Contact Me</h2>
          <p>
            For more information about my privacy practices, if you have questions, or if you would like to make a complaint, please contact me by email at{' '}
            <a 
              href="mailto:krishnakeshri9510ib@gmail.com" 
              className="text-white hover:text-gray-300 dark:text-white dark:hover:text-gray-300 underline"
            >
              krishnakeshri9510ib@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
