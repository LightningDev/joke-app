import JokeView from "@/components/JokeView";

const Home = async () => {
  const response: any = await fetch(`${process.env.HOST}/api`, { cache: 'no-store' })
  const joke = await response.json()

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Here&apos;s a Joke for You
          </h2>
        </div>
        <JokeView joke={{setup: joke.response.setup, delivery: joke.response.delivery}} />
      </div>
    </div>
  );
}

export default Home
