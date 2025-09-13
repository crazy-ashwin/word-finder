import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Weights or Weigths - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;weights&quot; and &quot;weigths&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WeightsVsWeigthsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Weights or Weigths</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;weights&quot; and &quot;weigths&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Weigths</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Weigths&quot; is a misspelling. The correct spelling is &quot;weights&quot; with an &quot;h&quot; before the &quot;t&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Weights</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Weights&quot; is the correct spelling. It is the plural form of &quot;weight&quot; meaning heavy objects or the force of gravity.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Weights</strong> is the correct spelling. It is the plural form of &quot;weight&quot; and refers to heavy objects used for exercise or measurement.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Weigths</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Weights (plural noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Heavy objects used for exercise, measurement, or to hold something down; the plural form of &quot;weight&quot;.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Weight (singular noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              The force exerted on a body by gravity; the heaviness of an object.
            </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to refer to multiple heavy objects, especially in fitness and measurement contexts.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I lift <span className="text-green-600 font-semibold">weights</span> at the gym three times a week.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">weights</span> on the scale show 150 pounds.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She uses free <span className="text-green-600 font-semibold">weights</span> for strength training.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;I lift <span className="text-red-600 font-semibold">weigths</span> at the gym&quot; (should be &quot;weights&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For exercise:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Dumbbells</li>
                <li>• Barbells</li>
                <li>• Kettlebells</li>
                <li>• Resistance</li>
                <li>• Load</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For measurement:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Mass</li>
                <li>• Heaviness</li>
                <li>• Burden</li>
                <li>• Pressure</li>
                <li>• Force</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Weights&quot; is spelled with an &quot;h&quot; before the &quot;t&quot;</li>
          <li>• The word comes from Old English &quot;gewiht&quot; meaning &quot;weight&quot;</li>
          <li>• It is the plural form of the singular noun &quot;weight&quot;</li>
          <li>• Commonly used in fitness and exercise contexts</li>
          <li>• Can also refer to objects used to hold things down</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;weigths&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;weigths&quot; is never correct. The correct spelling is always &quot;weights&quot; with an &quot;h&quot; before the &quot;t&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;weights&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WAYTS&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;weights&quot; and &quot;weigths&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Weights&quot; is the correct spelling meaning heavy objects, while &quot;weigths&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;weights&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;weights&quot; can refer to exercise equipment, measurement tools, or any heavy objects used for various purposes.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;weights&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;weigths&quot;, possibly because they forget the &quot;h&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Weights</strong> is the correct spelling. It is the plural form of &quot;weight&quot; and refers to heavy objects used for exercise or measurement.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Weigths</strong> is always incorrect. Remember to include the &quot;h&quot; before the &quot;t&quot; when writing this word.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 