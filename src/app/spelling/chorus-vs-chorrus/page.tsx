import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chorus vs Chorrus - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "chorus" and "chorrus". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'chorus vs chorrus, correct spelling, spelling comparison, English spelling, word confusion',
  openGraph: {
    title: 'Chorus vs Chorrus - Which is Correct?',
    description: 'Learn the correct spelling between "chorus" and "chorrus". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ChorusVsChorrusPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Chorus or Chorrus</h1>
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;chorus&quot; or &quot;chorrus&quot;, this noun and common misspellings.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 flex items-center">❌ Incorrect: Chorrus</h3>
          <p className="text-lg md:text-xl text-red-800 mb-4"><strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;chorus.&quot; The correct spelling uses only one &quot;r&quot; in the middle.</p>
          <p className="text-lg md:text-xl text-red-800"><strong>Common Error:</strong> Doubling the &quot;r&quot; in the word</p>
        </div>
        <div className="bg-green-50 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 flex items-center">✅ Correct: Chorus</h3>
          <p className="text-lg md:text-xl text-green-800 mb-4"><strong>Definition:</strong> A group of singers or the refrain of a song.</p>
          <p className="text-lg md:text-xl text-green-800"><strong>Part of Speech:</strong> Noun</p>
        </div>
      </div>
      {/* Synonyms Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Chorus</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Choir</h3>
            <p className="text-lg text-blue-700">A group of singers</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Refrain</h3>
            <p className="text-lg text-blue-700">The repeated part of a song</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Ensemble</h3>
            <p className="text-lg text-blue-700">A group performing together</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Chant</h3>
            <p className="text-lg text-blue-700">A repeated rhythmic phrase</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Group</h3>
            <p className="text-lg text-blue-700">A number of people or things that are located, gathered, or classed together</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Singers</h3>
            <p className="text-lg text-blue-700">People who sing together</p>
          </div>
        </div>
      </div>
      {/* Usage Examples Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">chorus</span> sang beautifully.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800"><strong>Incorrect:</strong> &quot;The <span className="text-red-600 font-semibold">chorrus</span> sang beautifully.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;Everyone joined in the <span className="text-green-600 font-semibold">chorus</span>.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">chorus</span> repeated after each verse.&quot;</p>
          </div>
        </div>
      </div>
      {/* Notes Section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&bull; &quot;Chorus&quot; is pronounced as /ˈkɔːrəs/</li>
          <li>&bull; The word comes from Greek &quot;khoros&quot;</li>
          <li>&bull; &quot;Chorus&quot; is always spelled with one &quot;r&quot; in the middle</li>
          <li>&bull; Remember: The correct spelling is &quot;chorus&quot; with one &quot;r&quot;</li>
          <li>&bull; Commonly misspelled due to the double &quot;r&quot; sound</li>
        </ul>
      </div>
      {/* FAQ Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Why do people misspell &quot;chorus&quot; as &quot;chorrus&quot;?</h3>
            <p className="text-lg text-blue-800">A: The double &quot;r&quot; sound in the middle of the word can lead to the mistaken addition of an extra &quot;r&quot;. The correct spelling only has one &quot;r&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What does &quot;chorus&quot; mean?</h3>
            <p className="text-lg text-blue-800">A: &quot;Chorus&quot; can refer to a group of singers or the repeated part of a song.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: How can I remember the correct spelling of &quot;chorus&quot;?</h3>
            <p className="text-lg text-blue-800">A: Remember that &quot;chorus&quot; has only one &quot;r&quot; in the middle, not two.</p>
          </div>
        </div>
      </div>
      {/* Summary Section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Chorus</strong> is the correct spelling. It refers to a group of singers or the refrain of a song. The word is spelled with one &quot;r&quot; in the middle: &quot;chorus&quot;. &quot;Chorrus&quot; is a misspelling that should be avoided.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 