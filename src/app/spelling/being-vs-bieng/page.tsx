import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Being vs Bieng - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;being&quot; and &quot;bieng&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'being, bieng, spelling, correct spelling, word comparison, English spelling, verb, existence',
  openGraph: {
    title: 'Being vs Bieng - Which is Correct?',
    description: 'Learn the correct spelling between &quot;being&quot; and &quot;bieng&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BeingVsBiengPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Being vs Bieng</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of this essential verb form and noun.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Bieng
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Bieng&quot; is a misspelling of the word &quot;being.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I am bieng careful</li>
              <li>• Human bieng is complex</li>
              <li>• She is bieng helpful</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Being
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Being&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• I am being careful</li>
              <li>• Human being is complex</li>
              <li>• She is being helpful</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Being</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Being</strong> (verb): Present participle of &quot;be&quot; - used to form continuous tenses and passive voice.
          </p>
          <p>
            <strong>Being</strong> (noun): A living creature, especially a human being; existence or the state of existing.
          </p>
          <p>
            Used to express ongoing actions, states of existence, or to refer to living creatures and their nature.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Being</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Existence</li>
              <li>• Life</li>
              <li>• Creature</li>
              <li>• Individual</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Person</li>
              <li>• Entity</li>
              <li>• Soul</li>
              <li>• Organism</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Being&quot; is always spelled with &quot;ei&quot; in the middle</li>
          <li>• The word comes from the verb &quot;be&quot; + the suffix &quot;-ing&quot;</li>
          <li>• The pronunciation is /ˈbiːɪŋ/ (BEE-ing)</li>
          <li>• &quot;Bieng&quot; is a common misspelling but is never correct</li>
          <li>• The &quot;ei&quot; spelling follows the pattern of the base word &quot;be&quot;</li>
          <li>• This spelling pattern applies to other forms like &quot;seeing,&quot; &quot;agreeing,&quot; etc.</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;bieng&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people confuse the &quot;ei&quot; sound with &quot;ie&quot;. The correct spelling follows the pattern of the base word &quot;be.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;bieng&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;bieng&quot; is always incorrect. Always use &quot;being&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;being&quot; and &quot;be&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Be&quot; is the base form of the verb, while &quot;being&quot; is the present participle used in continuous tenses and as a noun meaning existence or creature.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;be&quot; + &quot;ing&quot;. The base word &quot;be&quot; has &quot;e&quot; before &quot;i&quot;, so &quot;being&quot; follows the same pattern.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Being</strong> is the correct spelling of this word. The incorrect spelling &quot;bieng&quot; should never be used.
          </p>
          <p>
            Remember: Being = Be + ing. The &quot;ei&quot; spelling follows the pattern of the base word &quot;be,&quot; which is why we spell it &quot;being&quot; and not &quot;bieng.&quot;
          </p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 