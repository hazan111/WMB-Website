/**
 * Responsive skeleton loader for section placeholders.
 * Reduces CLS by reserving realistic space for content.
 */
export default function SectionSkeleton() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="İçerik yükleniyor"
      className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        {/* Header section */}
        <div className="space-y-4 text-center">
          {/* Title skeleton */}
          <div className="h-8 md:h-10 w-3/4 max-w-md mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
          {/* Subtitle skeleton */}
          <div className="h-4 md:h-5 w-2/3 max-w-sm mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        {/* Content grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card skeletons */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              {/* Card image/icon skeleton */}
              <div className="h-32 md:h-40 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
              {/* Card title skeleton */}
              <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              {/* Card text skeleton */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional content skeleton */}
        <div className="space-y-4">
          <div className="h-4 w-full max-w-2xl mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-4 w-full max-w-xl mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
      </div>
      <span className="sr-only">İçerik yükleniyor...</span>
    </div>
  )
}

