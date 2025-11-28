'use client'
import React, { useState } from 'react'
import { searchUsers, addFriend } from '@/app/api-services/friendService'
import Link from 'next/link'

interface User {
  id: number
  name: string
  email: string
}

const SearchFriends = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<User[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSearch = async () => {
    const value = searchTerm.trim();

    if (!value) {
      setResults([]);
      setEmailError('Please enter an email address');
      return;
    }

    // Validate email format
    if (!isValidEmail(value)) {
      setEmailError('Please enter a valid email address');
      setResults([]);
      return;
    }

    // Clear any previous errors
    setEmailError('');

    setIsSearching(true);
    try {
      const list = await searchUsers(value);
      setResults(list);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
      setEmailError('Search failed. Please try again.');
    } finally {
      setIsSearching(false);
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Clear error when user starts typing
    if (emailError && value.trim()) {
      setEmailError('');
    }
  }

  const addUser = async (userId: number) => {
    try {
      await addFriend(userId);
      // Optional: Remove the user from results or show success message
      // You can add a toast notification here
      alert('Friend request sent successfully!');
    } catch (error) {
      console.error('Failed to add friend:', error);
      alert('Failed to send friend request. Please try again.');
    }
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-base-content">Search Users</h1>
        <Link href="/dashboard/friends" className="text-primary hover:text-primary-focus transition-colors duration-300">Back to Friends</Link>
      </div>
      
      <div className="mb-6">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="email"
              placeholder="Enter email address to search..."
              className={`w-full pl-10 pr-4 py-2 border rounded-full text-base-content bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary ${
                emailError ? 'border-error' : 'border-base-300'
              }`}
              value={searchTerm}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-base-content/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button
            className="btn btn-primary rounded-full px-6"
            onClick={handleSearch}
            disabled={isSearching || !searchTerm.trim()}
          >
            {isSearching ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Searching...
              </>
            ) : (
              'Search'
            )}
          </button>
        </div>
        
        {/* Error message */}
        {emailError && (
          <div className="mt-2 text-error text-sm flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {emailError}
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {results.map((u) => (
          <div key={u.id} className="bg-base-100 rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-base md:text-lg text-base-content">{u.name}</p>
                <p className="text-sm text-base-content/70">{u.email}</p>
              </div>
              <button
                className="btn btn-primary btn-sm md:btn-md rounded-full"
                onClick={() => addUser(u.id)}
              >
                Add Friend
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {results.length === 0 && searchTerm && !isSearching && !emailError && (
        <div className="text-center py-8">
          <p className="text-base-content/70">No users found with this email address.</p>
        </div>
      )}
    </div>
  )
}

export default SearchFriends