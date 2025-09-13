import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vigilance or Vigilence - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "vigilance" and "vigilence". Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VigilanceVsVigilencePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Vigilance or Vigilence</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;vigilance&quot; and &quot;vigilence&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Vigilence</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Vigilence&quot; is a misspelling. The correct spelling is &quot;vigilance&quot; with an &quot;a&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Vigilance</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Vigilance&quot; is the correct spelling. It means the action or state of keeping careful watch for possible danger or difficulties.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Vigilance (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The action or state of keeping careful watch for possible danger or difficulties; alertness.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The police maintained their <strong>vigilance</strong> throughout the night.</li>
                  <li>• Constant <strong>vigilance</strong> is required in this job.</li>
                  <li>• Her <strong>vigilance</strong> prevented an accident.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Vigilence (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Vigilence&quot; is a misspelling of &quot;vigilance&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Vigilence&quot; is not used in standard English.</li>
                  <li>• Always use <strong>vigilance</strong> when referring to alertness.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Vigilance:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Watchfulness</li>
                <li>• Alertness</li>
                <li>• Attentiveness</li>
                <li>• Carefulness</li>
                <li>• Caution</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Vigilence:</h4>
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
            <li>• <strong>Vigilance</strong> is spelled with an &quot;a&quot; before the &quot;n&quot;.</li>
            <li>• It is a noun describing alertness and carefulness.</li>
            <li>• &quot;Vigilence&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;vigilantia&quot; meaning &quot;wakefulness&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vigilence&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;vigilence&quot; is never correct. The proper spelling is always &quot;vigilance&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;vigilance&quot; has an &quot;a&quot; before the &quot;n&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does vigilance mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Vigilance means the action or state of keeping careful watch for possible danger or difficulties.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use &quot;vigilance&quot; in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;vigilance&quot; is correct in all contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;vigilance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;vigilence&quot; often happens by replacing the &quot;a&quot; with an &quot;e&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Vigilance</strong> is the correct spelling with &quot;ance&quot;: vig-i-lance. It means watchfulness or alertness. The misspelling &quot;vigilence&quot; is never correct. Always use &quot;vigilance&quot; when referring to being watchful or alert.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 