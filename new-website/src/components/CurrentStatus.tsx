import Container from "./Container";

export default function CurrentStatus() {
  return (
    <section className="py-8">
      <Container>
        <div className="bg-black rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm">
            <div className="mb-6">
              <div className="text-green-400 mb-1">$ cat now.txt</div>
              <div className="text-gray-500 text-xs">
                Last updated: July 6, 2025
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400">●</span>
                <div>
                  <span className="text-green-400">Building:</span>
                  <span className="text-gray-300 ml-2">
                    Foundational Models for Physics Simulations
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-400">●</span>
                <div>
                  <span className="text-blue-400">Writing:</span>
                  <span className="text-gray-300 ml-2">
                    "A Deep Dive into AI Agent Memory"
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-purple-400">●</span>
                <div>
                  <span className="text-purple-400">Reading:</span>
                  <span className="text-gray-300 ml-2">
                    <em>The Count of Monte Cristo</em> by Alexandre Dumas
                  </span>
                </div>
              </div>
            </div>

            {/* Blinking cursor */}
            <div className="mt-4 flex items-center gap-1">
              <span className="text-green-400">$</span>
              <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1"></span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
