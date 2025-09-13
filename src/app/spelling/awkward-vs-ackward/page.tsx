import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Awkward or Ackward - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;awkward&quot; and &quot;ackward&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AwkwardVsAckwardPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Awkward or Ackward</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;awkward&quot; and &quot;ackward&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Ackward</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Ackward&quot; is a misspelling. The correct spelling is &quot;awkward&quot; with &quot;awk&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Awkward</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Awkward&quot; is the correct spelling. It means causing difficulty, embarrassment, or discomfort.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Awkward (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Causing difficulty, embarrassment, or discomfort; not graceful or elegant; socially uncomfortable.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The silence was <strong>awkward</strong> between them.</li>
                  <li>• He made an <strong>awkward</strong> attempt to dance.</li>
                  <li>• The situation became <strong>awkward</strong> when she arrived.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Ackward (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Ackward&quot; is a misspelling of &quot;awkward&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Ackward&quot; is not used in standard English.</li>
                  <li>• Always use <strong>awkward</strong> when referring to discomfort.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Awkward:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Uncomfortable</li>
                <li>• Clumsy</li>
                <li>• Embarrassing</li>
                <li>• Difficult</li>
                <li>• Inconvenient</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Ackward:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Awkward</strong> starts with &quot;awk&quot;, not &quot;ack&quot;.</li>
          <li>• The word comes from Middle English &quot;awk&quot; meaning turned the wrong way.</li>
          <li>• Used to describe uncomfortable situations, clumsy movements, or social discomfort.</li>
          <li>• Common in everyday conversation and writing.</li>
          <li>• &quot;Ackward&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;ackward&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ackward&quot; is never correct. The proper spelling is always &quot;awkward.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;awk&quot; + &quot;ward&quot; - like &quot;awk&quot; with &quot;ward&quot; direction.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between awkward and uncomfortable?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Awkward&quot; often implies social discomfort or clumsiness, while &quot;uncomfortable&quot; is more general physical or emotional discomfort.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can awkward be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;awkward&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;ackward&quot; likely occurs because of confusion about the spelling of &quot;awk&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;awkward&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: awkward silence, awkward moment, awkward situation, awkward position, and awkward phase.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Awkward</strong> is the correct spelling with &quot;awk&quot; at the beginning. It means causing difficulty, embarrassment, or discomfort. The misspelling &quot;ackward&quot; is never correct.        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 