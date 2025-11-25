'use client'
import React, { useState } from 'react'
import { searchUsers,addFriend } from '@/app/api-services/friendService'
import Link from 'next/link'

interface User {
  id: number
  name: string
  email: string
}

const SearchFriends = () => {
  const [results, setResults] = useState<User[]>([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if (!value) {
      setResults([]);
      return;
    }

    const list = await searchUsers(value);
    setResults(list);
  }

  const addUser = async (userId:number) => {
    addFriend(userId);
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-base-content">Search Users</h1>
        <Link href="/dashboard/friends" className="text-primary hover:text-primary-focus transition-colors duration-300">Back to Friends</Link>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search for new friends..."
          className="w-full pl-10 pr-4 py-2 border border-base-300 rounded-full text-base-content bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={handleSearch}
        />
        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-base-content/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

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
    </div>
  )
}

export default SearchFriends
