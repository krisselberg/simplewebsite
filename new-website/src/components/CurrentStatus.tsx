import Container from "./Container";

export default function CurrentStatus() {
  return (
    <section className="py-8">
      <Container>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            What am I doing now?
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            Last updated: July 6, 2025
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-medium">Building:</span>
                <span className="text-gray-300 ml-2">
                  AI Agents for Data Stewardship
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-medium">Writing:</span>
                <span className="text-gray-300 ml-2">
                  "A Deep Dive into AI Agent Memory"
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-white font-medium">Reading:</span>
                <span className="text-gray-300 ml-2">
                  <em>High Growth Handbook</em> by Elad Gil
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
