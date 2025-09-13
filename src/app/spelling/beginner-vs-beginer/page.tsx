import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beginner vs Beginer - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "beginner" and "beginer". Discover definitions, examples, and tips to remember the right spelling.',
}

export default function BeginnerVsBeginerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Beginner or Beginer</h1>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block">
            <p className="text-lg md:text-xl font-semibold">Spelling Comparison</p>
          </div>
        </div>

        {/* Correct vs Incorrect Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Incorrect Card */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-800">Beginer</h2>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              This is the incorrect spelling. &quot;Beginer&quot; is a common misspelling that omits the second &quot;n&quot;.
            </p>
          </div>

          {/* Correct Card */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-800">Beginner</h2>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              This is the correct spelling. &quot;Beginner&quot; comes from the word &quot;begin&quot; with the suffix &quot;-er&quot;.
            </p>
          </div>
        </div>

        {/* Definition Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Beginner (noun)</h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                A person who is just starting to learn or do something; someone who is new to a particular activity, skill, or field.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Examples:</h4>
              <ul className="text-lg md:text-xl text-gray-700 space-y-2">
                <li>• He&apos;s a <strong>beginner</strong> at playing chess.</li>
                <li>• The class is perfect for <strong>beginners</strong>.</li>
                <li>• As a <strong>beginner</strong> in photography, she started with basic techniques.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Synonyms Section */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Synonyms</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">For &quot;beginner&quot;:</h3>
              <ul className="text-lg md:text-xl text-blue-700 space-y-2">
                <li>• Novice</li>
                <li>• Rookie</li>
                <li>• Newcomer</li>
                <li>• Amateur</li>
                <li>• Neophyte</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Related Terms:</h3>
              <ul className="text-lg md:text-xl text-blue-700 space-y-2">
                <li>• Starter</li>
                <li>• Trainee</li>
                <li>• Apprentice</li>
                <li>• Learner</li>
                <li>• Initiate</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• &quot;Beginner&quot; is formed by adding the suffix &quot;-er&quot; to the verb &quot;begin.&quot;</li>
            <li>• The word &quot;begin&quot; has two &quot;n&quot;s, so &quot;beginner&quot; also has two &quot;n&quot;s.</li>
            <li>• &quot;Beginer&quot; is a phonetic misspelling that omits the second &quot;n.&quot;</li>
            <li>• This pattern is consistent with other words like &quot;winner&quot; (from &quot;win&quot;) and &quot;runner&quot; (from &quot;run&quot;).</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Why does &quot;beginner&quot; have two &quot;n&quot;s?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                &quot;Beginner&quot; has two &quot;n&quot;s because it comes from the word &quot;begin&quot; which already has two &quot;n&quot;s. When adding the suffix &quot;-er,&quot; we keep the original spelling.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;beginer&quot; ever correct?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                No, &quot;beginer&quot; is never correct in standard English. It&apos;s always a misspelling of &quot;beginner.&quot;
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;beginner&quot; and &quot;beginer&quot;?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                &quot;Beginner&quot; is the correct spelling meaning someone who is new to something, while &quot;beginer&quot; is simply incorrect.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">How can I remember the correct spelling?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                Remember that &quot;beginner&quot; comes from &quot;begin&quot; + &quot;er.&quot; Since &quot;begin&quot; has two &quot;n&quot;s, &quot;beginner&quot; also has two &quot;n&quot;s.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Are there other words that follow this same pattern?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                Yes! Words like &quot;winner&quot; (from &quot;win&quot;), &quot;runner&quot; (from &quot;run&quot;), &quot;swimmer&quot; (from &quot;swim&quot;), and &quot;dinner&quot; (from &quot;dine&quot;) all follow similar patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800 leading-relaxed">
            <strong>&quot;Beginner&quot;</strong> is the correct spelling, while <strong>&quot;beginer&quot;</strong> is incorrect. The word is formed by adding the suffix &quot;-er&quot; to &quot;begin,&quot; maintaining the double &quot;n&quot; from the original word. Always use &quot;beginner&quot; when referring to someone who is new to a skill or activity.
          </p>
        </div>

        {/* Three Column Layout */}
        
      </div>
    </div>
  )
} 