export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 font-sans">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Solange Watson</h1>
        <p className="text-gray-700 mt-2">
          , FL • solangewatson@usf.edu • (850)758-6955
        </p>
        <p className="text-gray-700">
          LinkedIn: linkedin.com/in/solangewatson
        </p>
      </header>

      {/* Summary */}
      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
          Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Motivated business student with experience in customer service,
          data analysis, and digital tools. Strong communicator with
          a passion for learning how to utilize modern technologies and improving workflow
          efficiency.
        </p>
      </section>

      {/* Education */}
      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
          Education
        </h2>
        <div>
          <h3 className="font-bold text-gray-800">University of South Florida</h3>
          <p className="text-gray-700">B.S. in Business Administration — Expected 2026</p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
          Work Experience
        </h2>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800">FOH Associate</h3>
          <p className="text-gray-700 italic">Chick-fil-a • 2019–2022</p>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>Handled customer orders and inquiries.</li>
            <li>Maintained store cleanliness and product organization.</li>
            <li>Handled POS transactions with accuracy and efficiency.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-800">Food Runner</h3>
          <p className="text-gray-700 italic">Chilli's • 2022–2023</p>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>Efficiently delivered food to guests.</li>
            <li>Assisted in maintaining a clean and organized dining area.</li>
            <li>Provided support for servers and hosts when needed.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
          Skills
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Customer Service</li>
          <li>Organization</li>
          <li>POS system handling</li>
          <li>Communication & Teamwork</li>
          <li>Time Management</li>
        </ul>
      </section>

      {/* Projects (Optional) */}
      <section className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">
          Projects
        </h2>
        <p className="text-gray-700">
          Portfolio Website — Built a personal portfolio using HTML, CSS, and JavaScript.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-10">
         2026 Solange Watson — Resume
      </footer>
    </main>
  );
}

