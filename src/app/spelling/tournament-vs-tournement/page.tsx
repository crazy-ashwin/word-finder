import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tournament or Tournement - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;tournament&quot; and &quot;tournement&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TournamentVsTournementPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Tournament or Tournement</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;tournament&quot; and &quot;tournement&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tournement</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tournement&quot; is a misspelling. The correct spelling is &quot;tournament&quot; with &quot;ment&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tournament</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tournament&quot; is the correct spelling. It means a competition or contest.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tournament (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A competition involving a number of matches, each between a limited number of competitors, who compete for an overall prize.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The tennis <strong>tournament</strong> starts next week.</li>
                  <li>• She won the chess <strong>tournament</strong>.</li>
                  <li>• The <strong>tournament</strong> had 32 participants.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tournement (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tournement&quot; is a misspelling of &quot;tournament&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tournement&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tournament</strong> when referring to competitions.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tournament:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Competition</li>
                <li>• Contest</li>
                <li>• Championship</li>
                <li>• Event</li>
                <li>• Match</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tournement:</h4>
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
            <li>• <strong>Tournament</strong> is spelled with &quot;ment&quot; at the end: tour-na-ment.</li>
            <li>• It is a common word for competitive events.</li>
            <li>• &quot;Tournement&quot; is never correct in any context.</li>
            <li>• The word comes from Old French &quot;torneiement&quot; meaning &quot;contest.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tournement&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tournement&quot; is never correct. The proper spelling is always &quot;tournament.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;tournament&quot; ends with &quot;ment&quot; - think of it as &quot;tour-na-ment.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between a tournament and a competition?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A tournament typically involves multiple rounds or matches, while a competition can be a single event.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tournament&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tournament&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;tournament&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tournement&quot; often happens by replacing &quot;ment&quot; with &quot;nement&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;tournament&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: tennis tournament, chess tournament, golf tournament, and tournament bracket.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tournament&quot; always about sports?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tournament&quot; can refer to competitions in games, sports, or other competitive activities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tournament&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tournament&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Tournament</strong> is the correct spelling with &quot;ment&quot; at the end: tour-na-ment. It means a competition involving multiple matches or rounds. The misspelling &quot;tournement&quot; is never correct. Always use &quot;tournament&quot; when referring to competitive events or contests.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 