import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bonfire vs Bondfire - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bonfire&quot; and &quot;bondfire&quot;. Discover definitions, examples, and common usage tips to avoid this spelling mistake.',
  keywords: 'bonfire, bondfire, spelling, correct spelling, grammar, word comparison',
  openGraph: {
    title: 'Bonfire vs Bondfire - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bonfire&quot; and &quot;bondfire&quot;. Discover definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function BonfireVsBondfirePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bonfire vs Bondfire</h1>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Which spelling is correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          The correct spelling is <strong>bonfire</strong>. &quot;Bondfire&quot; is a misspelling.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">✅ Bonfire (Correct)</h3>
          <p className="text-lg md:text-xl text-green-800">
            &quot;Bonfire&quot; means a large outdoor fire, often for celebration or burning waste.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">❌ Bondfire (Incorrect)</h3>
          <p className="text-lg md:text-xl text-red-800">
            &quot;Bondfire&quot; is a misspelling and not a recognized English word.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p><strong>Bonfire</strong> (noun): A large outdoor fire, especially one built for celebration or to burn waste materials.</p>
          <p><strong>Examples:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>We gathered around the <em>bonfire</em> to celebrate the summer solstice.</li>
            <li>The <em>bonfire</em> crackled and popped as we roasted marshmallows.</li>
            <li>They built a <em>bonfire</em> to burn the fallen leaves.</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <strong>Related to bonfire:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Campfire</li>
              <li>Blaze</li>
              <li>Conflagration</li>
              <li>Inferno</li>
            </ul>
          </div>
          <div>
            <strong>Related concepts:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Fire</li>
              <li>Flame</li>
              <li>Combustion</li>
              <li>Pyre</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Bonfire&quot; comes from the Middle English &quot;bone fire&quot; (fire for burning bones).</li>
          <li>The word has been used since the 15th century.</li>
          <li>&quot;Bondfire&quot; is a common error due to the similar sound.</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;bonfire&quot; as &quot;bondfire&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Because &quot;bon&quot; and &quot;bond&quot; sound similar, people sometimes add the &quot;d&quot; when writing the word.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is &quot;bondfire&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;bondfire&quot; is never correct in standard English. Always use &quot;bonfire&quot;.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Think of &quot;bon&quot; (good in French) + &quot;fire&quot; = &quot;bonfire&quot;. No &quot;d&quot; is needed.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bonfire</strong> is the correct spelling with &quot;n&quot;: bon-fire. It means a large outdoor fire. The misspelling &quot;bondfire&quot; is never correct. Always use &quot;bonfire&quot; when referring to outdoor fires.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 