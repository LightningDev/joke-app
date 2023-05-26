'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

const JokeView = (props: any) => {
  const [showPunchline, setShowPunchline] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { joke } = props

  useEffect(() => {
    setIsLoading(joke.setup === '')
  }, [joke.setup])

  const refreshJoke = () => {
    setShowPunchline(false)
    setIsLoading(true)
    joke.setup = ''
    joke.delivery = ''
    router.refresh()
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-4 text-gray-700 text-lg">
        <div className="mb-4 p-4 bg-blue-200 rounded-xl">
          <p className="font-semibold text-xl text-blue-900">{joke.setup}</p>
        </div>
        {showPunchline ? (
          <div className="p-4 bg-orange-200 rounded-xl">
            <p className="text-orange-900 text-lg font-semibold">{joke.delivery}</p>
          </div>
        ) : (
          <button
            className="mt-4 bg-purple-900 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded w-full"
            onClick={() => setShowPunchline(true)}
          >
            Tell me
          </button>
        )}
      </div>
      <button
        className="w-full mt-4 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
        onClick={refreshJoke}
      >
        New Joke
      </button>
    </>
  )
}

export default JokeView

