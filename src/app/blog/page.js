'use client';

import { useState } from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Understanding Transformers in NLP',
    description: 'A beginner-friendly guide to the transformer architecture.',
    link: '/posts/transformers-nlp',
    image: 'https://via.placeholder.com/300',
    date: '2024-12-10',
    category: 'NLP',
  },
  {
    title: 'Building a Sentiment Analysis Model',
    description: 'Step-by-step instructions for building a sentiment analysis model.',
    link: '/posts/sentiment-analysis',
    image: 'https://via.placeholder.com/300',
    date: '2024-11-20',
    category: 'Machine Learning',
  },
  {
    title: '10 NLP Datasets You Should Know',
    description: 'An overview of popular datasets used in NLP.',
    link: '/posts/nlp-datasets',
    image: 'https://via.placeholder.com/300',
    date: '2024-10-15',
    category: 'NLP',
  },
  {
    title: 'AI in Healthcare: Revolutionizing Diagnostics',
    description: 'How AI is transforming healthcare through diagnostic tools.',
    link: '/posts/ai-healthcare',
    image: 'https://via.placeholder.com/300',
    date: '2024-09-05',
    category: 'AI',
  },
  // More posts can be added here
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');
  const [visiblePosts, setVisiblePosts] = useState(4);

  // Filter blog posts by search query and category
  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === 'Newest') {
        return new Date(b.date) - new Date(a.date);
      }
      return a.title.localeCompare(b.title);
    });

  const currentPosts = filteredPosts.slice(0, visiblePosts);

  // Handle "Load More" functionality
  const handleLoadMore = () => setVisiblePosts((prev) => prev + 4);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">Blog</h2>

        {/* Search, Filters, and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-1/3 p-3 mb-4 sm:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-1/3 p-3 mb-4 sm:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="All">All Categories</option>
            <option value="NLP">NLP</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="AI">AI</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="Newest">Newest First</option>
            <option value="Title">Sort by Title</option>
          </select>
        </div>

        {/* Blog Posts Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <div
                key={post.title}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="text-blue-600">{post.category}</span>
                  </div>
                  <Link
                    href={post.link}
                    className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No posts match your search or filter criteria.</p>
          )}
        </div>

        {/* Load More Button */}
        {visiblePosts < filteredPosts.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
