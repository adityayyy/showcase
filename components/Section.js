export default function Section({ id, title, content }) {
    return (
      <section
        id={id}
        className="min-h-screen flex flex-col items-center justify-center bg-gray-50 border-b border-gray-200"
      >
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 text-center max-w-2xl">{content}</p>
      </section>
    );
  }
  