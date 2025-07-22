import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vigour or Vigeur - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "vigour" and "vigeur". Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VigourVsVigeurPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Vigour or Vigeur</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between "vigour" and "vigeur"? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Vigeur</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">"Vigeur" is a misspelling. The correct spelling is "vigour" (British English) or "vigor" (American English).</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Vigour</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">"Vigour" is the correct British spelling. It means physical strength, energy, or enthusiasm.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Vigour (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Physical strength, good health, or energy; intensity of action or effect.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She tackled the project with great <strong>vigour</strong>.</li>
                  <li>• The plants grew with surprising <strong>vigour</strong>.</li>
                  <li>• He defended his point with <strong>vigour</strong> and passion.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Vigeur (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">"Vigeur" is a misspelling of "vigour" and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• "Vigeur" is not used in standard English.</li>
                  <li>• Always use <strong>vigour</strong> (UK) or <strong>vigor</strong> (US).</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Vigour:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Energy</li>
                <li>• Vitality</li>
                <li>• Strength</li>
                <li>• Robustness</li>
                <li>• Dynamism</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Vigeur:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Vigour</strong> is the British spelling; <strong>vigor</strong> is the American spelling.</li>
            <li>• Both mean physical strength or energy.</li>
            <li>• "Vigeur" is never correct in English.</li>
            <li>• The word comes from Latin "vigere" meaning "to be lively".</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is "vigeur" ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, "vigeur" is never correct. The proper spelling is "vigour" (UK) or "vigor" (US).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember "vigour" has a "u" in British English, "vigor" does not in American English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does vigour mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Vigour means physical strength, energy, or enthusiasm.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use "vigour" in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, "vigour" is correct in British English; use "vigor" in American English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell "vigour"?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling "vigeur" may occur due to confusion with French spelling or phonetics.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Vigour</strong> (UK) or <strong>vigor</strong> (US) is the correct spelling, meaning physical strength or energy. "Vigeur" is never correct in English.</p>
      </div>
    </div>
  )
} 