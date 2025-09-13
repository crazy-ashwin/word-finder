import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Waiter or Waitor - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;waiter&quot; and &quot;waitor&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WaiterVsWaitorPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Waiter or Waitor</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;waiter&quot; and &quot;waitor&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Waitor</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Waitor&quot; is a misspelling. The correct spelling is &quot;waiter&quot; with an &quot;e&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Waiter</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Waiter&quot; is the correct spelling. It refers to a man whose job is to serve customers at their tables in a restaurant.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Waiter (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A man whose job is to serve customers at their tables in a restaurant.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>waiter</strong> brought us our food promptly.</li>
                  <li>• She asked the <strong>waiter</strong> for the check.</li>
                  <li>• The <strong>waiter</strong> was very polite and attentive.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Waitor (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Waitor&quot; is a misspelling of &quot;waiter&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Waitor&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;waiter&quot;</strong> when referring to a restaurant server.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Waiter:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Server</li>
                <li>• Waitress</li>
                <li>• Steward</li>
                <li>• Attendant</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Waitor:</h4>
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
            <li>• <strong>Waiter</strong> is spelled with an &quot;e&quot; before the &quot;r&quot;.</li>
            <li>• Used to refer to a male server in a restaurant.</li>
            <li>• The word &quot;waiter&quot; comes from the verb &quot;to wait&quot; (to serve or attend).</li>
            <li>• &quot;Waitor&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;waitor&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;waitor&quot; is never correct. The proper spelling is always &quot;waiter&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;waiter&quot; comes from &quot;wait&quot; + &quot;er&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;waiter&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Waiter&quot; means a man whose job is to serve customers at their tables in a restaurant.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;waiter&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;waiter&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;waiter&quot; pronounced?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It is pronounced /ˈweɪtər/ (WAY-ter).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Waiter</strong> is the correct spelling with &quot;er&quot; at the end. It means a person who serves food in a restaurant. The misspelling &quot;waitor&quot; with &quot;or&quot; is never correct. Always use &quot;waiter&quot; when referring to restaurant staff.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 