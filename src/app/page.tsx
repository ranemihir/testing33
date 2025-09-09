export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="text-center">
          {/* Main Hello World Heading */}
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300 ease-in-out">
            Hello World
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Welcome to your modern Next.js application! This is a simple yet beautiful Hello World page.
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          {/* Additional Info Card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 max-w-md mx-auto border border-white/20 hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-700 text-lg">
              Built with <span className="font-semibold text-blue-600">Next.js</span> and styled with <span className="font-semibold text-purple-600">Tailwind CSS</span>
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Ready for your amazing ideas! ✨
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}