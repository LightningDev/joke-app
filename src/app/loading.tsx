export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
    </div>
  )
}
