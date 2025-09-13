import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cast or Casted - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling and usage between "cast" and "casted". Discover definitions, examples, and common mistakes to avoid.',
}

export default function CastVsCastedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Cast or Casted</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;cast&quot; and &quot;casted&quot;? Learn the correct past tense form, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Casted</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Casted&quot; is generally considered incorrect as the past tense of &quot;cast.&quot; The correct form is &quot;cast.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Cast</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Cast&quot; is the correct past tense and past participle of &quot;cast.&quot; It is an irregular verb and does not change form.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Cast (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To throw something forcefully; to assign a role in a play or movie; to shape material by pouring it into a mold.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>cast</strong> her fishing line into the river.</li>
                  <li>• The director <strong>cast</strong> him as the lead actor.</li>
                  <li>• The statue was <strong>cast</strong> in bronze.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Casted (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Casted&quot; is not the standard past tense of &quot;cast&quot; in modern English. &quot;Cast&quot; is used for all tenses.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Casted&quot; is rarely used and is considered nonstandard.</li>
                  <li>• Always use <strong>cast</strong> for the past tense.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Cast:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Threw</li>
                <li>• Tossed</li>
                <li>• Flung</li>
                <li>• Assigned</li>
                <li>• Molded</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Casted:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word for past tense)</li>
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
            <li>• <strong>Cast</strong> is an irregular verb; its past tense is also <strong>cast</strong>.</li>
            <li>• &quot;Casted&quot; is sometimes used in technical contexts (like &quot;casted metal&quot;), but not for the verb meaning &quot;to throw&quot; or &quot;to assign a role.&quot;</li>
            <li>• In standard English, always use <strong>cast</strong> for the past tense.</li>
            <li>• The use of &quot;casted&quot; is considered nonstandard and should be avoided in formal writing.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;casted&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In standard English, &quot;casted&quot; is not correct for the past tense of &quot;cast.&quot; Use &quot;cast&quot; instead. &quot;Casted&quot; may appear in technical jargon (e.g., &quot;casted metal&quot;), but not in general usage.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the past tense of &quot;cast&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The past tense and past participle of &quot;cast&quot; is &quot;cast.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people say &quot;casted&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Some people mistakenly add &quot;-ed&quot; to form the past tense, but &quot;cast&quot; is irregular and does not change.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are there any exceptions?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In some technical fields, &quot;casted&quot; may be used (e.g., &quot;casted metal&quot;), but this is not standard for the verb meaning &quot;to throw&quot; or &quot;to assign a role.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Cast</strong> is the correct past tense form meaning to throw or assign roles. <strong>Casted</strong> is incorrect and should never be used. Always use &quot;cast&quot; for both present and past tense when referring to throwing or assigning roles.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 