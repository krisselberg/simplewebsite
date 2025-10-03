import Container from "./Container";

export default function Hero() {
  return (
    <section className="pt-32 pb-8">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-2 text-white">Kris Selberg</h1>
          <h2 className="text-xl text-gray-300 mb-6">
            Founding Member of Technical Staff @{" "}
            <a
              href="https://universalagi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              UniversalAGI
            </a>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Hi! I'm Kris. Currently, I'm researching and building AI agents that
            actually work. I speak okay Swedish, good English, and terrible
            Spanish. Please reach out if you want to chat about anything!
          </p>
        </div>
      </Container>
    </section>
  );
}
