'use client';

import { useState } from 'react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'Understanding Transformers in NLP',
      description: 'A beginner-friendly guide to the transformer architecture.',
      link: 'https://medium.com/your-username/understanding-transformers',
      image: 'https://via.placeholder.com/300',
      date: 'December 10, 2024',
      category: 'NLP',
    },
    {
      title: 'Building a Sentiment Analysis Model',
      description: 'Step-by-step instructions for building a sentiment analysis model.',
      link: 'https://medium.com/your-username/sentiment-analysis-model',
      image: 'https://via.placeholder.com/300',
      date: 'November 20, 2024',
      category: 'Machine Learning',
    },
    {
      title: '10 NLP Datasets You Should Know',
      description: 'An overview of popular datasets used in NLP.',
      link: 'https://medium.com/your-username/nlp-datasets',
      image: 'https://via.placeholder.com/300',
      date: 'October 15, 2024',
      category: 'NLP',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const postsPerPage = 3;

  // Filter blog posts based on search query and selected category
  const filteredPosts = blogPosts
    .filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((post) => (selectedCategory ? post.category === selectedCategory : true));

  // Sort by date
  const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Paginate blog posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Handle category selection
  const handleCategoryChange = (category) => setSelectedCategory(category);

  // Simulate a loading state
  const simulateLoading = () => setIsLoading(true);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">Blog</h2>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border rounded-md"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => handleCategoryChange('')}
            className={`px-4 py-2 ${!selectedCategory ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} border rounded-md`}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange('NLP')}
            className={`px-4 py-2 ${selectedCategory === 'NLP' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} border rounded-md`}
          >
            NLP
          </button>
          <button
            onClick={() => handleCategoryChange('Machine Learning')}
            className={`px-4 py-2 ${selectedCategory === 'Machine Learning' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} border rounded-md`}
          >
            Machine Learning
          </button>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="text-center col-span-3">Loading...</div>
          ) : (
            currentPosts.map((post) => (
              <article
                key={post.title}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-700 mb-5">{post.description}</p>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-sm text-blue-600 mb-4">{post.category}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  onClick={simulateLoading}
                >
                  Read More
                </a>
              </article>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-2 px-4 py-2 border rounded-md ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Link to see more blogs */}
        <div className="text-center mt-8">
          <a
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            See More Blogs
          </a>
        </div>
      </div>
    </section>
  );
}
