import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Yacht or Yaht - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;yacht&quot; and &quot;yaht&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function YachtVsYahtPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Yacht or Yaht</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;yacht&quot; or &quot;yaht&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Yaht</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Yaht&quot; is a common misspelling of &quot;yacht&quot;. Always use &quot;yacht&quot; when referring to a medium-sized sailing boat or motorboat used for recreation.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Yacht</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Yacht&quot; is a noun meaning a medium-sized sailing boat or motorboat used for recreation, racing, or cruising.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Yacht</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Yacht&quot;</strong> (noun): A medium-sized sailing boat or motorboat used for recreation, racing, or cruising.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in boating, travel, and luxury contexts to describe a type of vessel.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Yacht</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Boat</li>
                <li>• Cruiser</li>
                <li>• Sailboat</li>
                <li>• Motorboat</li>
                <li>• Vessel</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Catamaran</li>
                <li>• Schooner</li>
                <li>• Launch</li>
                <li>• Ship</li>
                <li>• Craft</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;They sailed their <span className="text-green-600 font-semibold">yacht</span> across the bay.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;They sailed their <span className="text-red-600 font-semibold">yaht</span> across the bay.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;The yacht was anchored near the shore.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Yacht&quot; is spelled with &quot;ch&quot; at the end, not &quot;ht&quot;.</li>
          <li>• The pronunciation is /jɒt/ (yot).</li>
          <li>• Commonly used in boating, travel, and luxury contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;yaht&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;yaht&quot; is never correct. The only correct form is &quot;yacht&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;yacht&quot; ends with &quot;ch&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the plural of &quot;yacht&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The plural is &quot;yachts&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;yacht&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;yacht&quot; can be used as a verb meaning to sail or cruise in a yacht.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;yacht&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;yacht club&quot;, &quot;yacht race&quot;, &quot;luxury yacht&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Yacht</strong> is the correct spelling, while <strong>yaht</strong> is always incorrect. Use &quot;yacht&quot; when referring to a medium-sized sailing boat or motorboat used for recreation.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 