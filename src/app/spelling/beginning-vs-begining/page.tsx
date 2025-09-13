import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beginning vs Begining - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;beginning&quot; and &quot;begining&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'beginning, begining, spelling, correct spelling, word comparison, English spelling, noun, verb',
  openGraph: {
    title: 'Beginning vs Begining - Which is Correct?',
    description: 'Learn the correct spelling between &quot;beginning&quot; and &quot;begining&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BeginningVsBeginingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Beginning vs Begining</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of this essential word for expressing starts and origins.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Begining
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Begining&quot; is a misspelling of the word &quot;beginning.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• The begining of the story was exciting</li>
              <li>• From the begining, I knew it was wrong</li>
              <li>• The begining of the year is always busy</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Beginning
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Beginning&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• The beginning of the story was exciting</li>
              <li>• From the beginning, I knew it was wrong</li>
              <li>• The beginning of the year is always busy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Beginning</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Beginning</strong> (noun): The point in time or space at which something starts; the first part or earliest stage of something.
          </p>
          <p>
            <strong>Beginning</strong> (verb): Present participle of &quot;begin&quot; - the act of starting something.
          </p>
          <p>
            Used to refer to the start, origin, or commencement of events, processes, stories, or time periods.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Beginning</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Start</li>
              <li>• Commencement</li>
              <li>• Onset</li>
              <li>• Outset</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Origin</li>
              <li>• Inception</li>
              <li>• Dawn</li>
              <li>• Genesis</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Beginning&quot; is always spelled with double &quot;n&quot; in the middle</li>
          <li>• The word comes from &quot;begin&quot; + the suffix &quot;-ing&quot;</li>
          <li>• The pronunciation is /bɪˈɡɪnɪŋ/ (bi-GIN-ing)</li>
          <li>• &quot;Begining&quot; is a common misspelling but is never correct</li>
          <li>• The double &quot;n&quot; follows the rule: double the final consonant before adding &quot;-ing&quot;</li>
          <li>• This spelling pattern applies to other words like &quot;running,&quot; &quot;swimming,&quot; etc.</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;begining&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people forget to double the &quot;n&quot; when adding the &quot;-ing&quot; suffix to &quot;begin.&quot; The rule is to double the final consonant before adding &quot;-ing.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;begining&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
                              A: No, &quot;begining&quot; is always incorrect. Always use &quot;beginning&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;beginning&quot; and &quot;start&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Both refer to the commencement of something, but &quot;beginning&quot; often implies the very first part or origin, while &quot;start&quot; can refer to any point where something begins.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Beginning</strong> is the correct spelling of this word. The incorrect spelling &quot;begining&quot; should never be used.
          </p>
          <p>
            Remember: Beginning = Begin + ning (with double &quot;n&quot;). This follows the English spelling rule of doubling the final consonant before adding &quot;-ing&quot; to words ending in consonant-vowel-consonant.
          </p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 