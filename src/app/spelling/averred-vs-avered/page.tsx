import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Averred or Avered - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;averred&quot; and &quot;avered&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AverredVsAveredPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Averred or Avered</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;averred&quot; and &quot;avered&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Avered</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Avered&quot; is a misspelling. The correct spelling is &quot;averred&quot; with two &quot;r&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Averred</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Averred&quot; is the correct spelling. It means to state or assert something as true.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Averred (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To state or assert something as true; to declare positively.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He <strong>averred</strong> that he was innocent of all charges.</li>
                  <li>• The witness <strong>averred</strong> the facts under oath.</li>
                  <li>• She <strong>averred</strong> her commitment to the project.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Avered (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Avered&quot; is a misspelling of &quot;averred&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Avered&quot; is not used in standard English.</li>
                  <li>• Always use <strong>averred</strong> when referring to assertions.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Averred:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Asserted</li>
                <li>• Declared</li>
                <li>• Stated</li>
                <li>• Affirmed</li>
                <li>• Maintained</li>
                <li>• Contended</li>
                <li>• Professed</li>
                <li>• Insisted</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Avered:</h4>
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
          <li>• <strong>Averred</strong> is spelled with two &quot;r&quot;s, not one.</li>
          <li>• The word comes from Latin &quot;adverare&quot; meaning to declare true.</li>
          <li>• Commonly used in legal and formal contexts.</li>
          <li>• The base form is &quot;aver&quot; and the past tense is &quot;averred.&quot;</li>
          <li>• &quot;Avered&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;avered&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;avered&quot; is never correct. The proper spelling is always &quot;averred&quot; with two &quot;r&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;aver-red&quot; - the base word &quot;aver&quot; plus the past tense ending with double &quot;r.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between averred and said?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Averred&quot; is more formal and implies a strong assertion, while &quot;said&quot; is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can averred be used in everyday conversation?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Averred&quot; is quite formal and is more commonly used in legal, academic, or formal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;avered&quot; likely occurs because of confusion about the double &quot;r&quot; rule in English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;averred&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: averred under oath, averred the truth, and averred his innocence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is averred always about truth?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Averred&quot; implies that the speaker believes what they&apos;re saying is true, but it doesn&apos;t guarantee the statement is actually true.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the present tense form?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The present tense form is &quot;aver&quot; - to aver something means to assert it as true.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Averred</strong> is the correct spelling with two &quot;r&quot;s. It means to state or assert something as true. The misspelling &quot;avered&quot; is never correct. Use &quot;averred&quot; in formal contexts to describe strong assertions or declarations.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 