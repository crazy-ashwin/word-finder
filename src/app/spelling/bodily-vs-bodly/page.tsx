import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bodily vs Bodly - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bodily&quot; and &quot;bodly&quot;. Discover definitions, examples, and common usage tips to avoid this spelling mistake.',
  keywords: 'bodily, bodly, spelling, correct spelling, grammar, word comparison',
  openGraph: {
    title: 'Bodily vs Bodly - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bodily&quot; and &quot;bodly&quot;. Discover definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function BodilyVsBodlyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bodily vs Bodly</h1>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Which spelling is correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          The correct spelling is <strong>bodily</strong>. &quot;Bodly&quot; is a misspelling.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">✅ Bodily (Correct)</h3>
          <p className="text-lg md:text-xl text-green-800">
            &quot;Bodily&quot; means relating to the body or physical form.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">❌ Bodly (Incorrect)</h3>
          <p className="text-lg md:text-xl text-red-800">
            &quot;Bodly&quot; is a misspelling and not a recognized English word.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p><strong>Bodily</strong> (adjective): Relating to the body; physical.</p>
          <p><strong>Examples:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>He suffered <em>bodily</em> harm in the accident.</li>
            <li>The <em>bodily</em> functions include breathing and digestion.</li>
            <li>She experienced <em>bodily</em> pain after the surgery.</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <strong>Related to bodily:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Physical</li>
              <li>Corporeal</li>
              <li>Somatic</li>
              <li>Fleshly</li>
            </ul>
          </div>
          <div>
            <strong>Related concepts:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Anatomical</li>
              <li>Physiological</li>
              <li>Material</li>
              <li>Tangible</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Bodily&quot; is formed from &quot;body&quot; + the suffix &quot;-ly&quot;.</li>
          <li>The word describes anything related to the physical body.</li>
          <li>&quot;Bodly&quot; is a common error due to the similar sound.</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;bodily&quot; as &quot;bodly&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Because &quot;body&quot; and &quot;bod&quot; sound similar, people sometimes drop the &quot;i&quot; when adding the &quot;-ly&quot; suffix.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is &quot;bodly&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;bodly&quot; is never correct in standard English. Always use &quot;bodily&quot;.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Think of &quot;body&quot; + &quot;ly&quot; = &quot;bodily&quot;. Keep the &quot;i&quot; from &quot;body&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Bodily</strong> is the correct spelling for anything relating to the body. &quot;Bodly&quot; is a misspelling and should be avoided. Always use &quot;bodily&quot; in your writing.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 