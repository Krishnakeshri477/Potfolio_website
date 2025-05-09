import { FiExternalLink } from 'react-icons/fi';

const Sitemap = () => {
  // List of all pages in your website
  const pages = [
    {
      title: "Home",
      path: "/",
      description: "Main landing page with introduction and featured work"
    },
    {
      title: "Blog",
      path: "/blog",
      description: "Articles and thoughts on design and development"
    },
    {
      title: "Contact",
      path: "/contact",
      description: "Ways to get in touch with me"
    },
    {
      title: "Privacy Policy",
      path: "/privacy-policy",
      description: "How I handle your personal data"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Sitemap</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A complete list of all pages on this website
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pages.map((page, index) => (
            <div 
              key={index}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                <a 
                  href={page.path} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {page.title}
                </a>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {page.description}
              </p>
              <a 
                href={page.path}
                className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Visit page <FiExternalLink className="ml-1" size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sitemap;