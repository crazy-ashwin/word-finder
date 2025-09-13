import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boys vs Boyss - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;boys&quot; and &quot;boyss&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'boys, boyss, spelling, correct spelling, word comparison, English spelling, plural, male children',
  openGraph: {
    title: 'Boys vs Boyss - Which is Correct?',
    description: 'Learn the correct spelling between &quot;boys&quot; and &quot;boyss&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BoysVsBoyssPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Boys or Boyss</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot; Boys&quot; and &quot; Boyss&quot;. This is the plural form of the word &quot;boy.&quot;
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Boyss
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Boyss&quot; is a misspelling of the word &quot;boys.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• The boyss are playing in the park</li>
              <li>• There are three boyss in the class</li>
              <li>• The boyss team won the game</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Boys
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Boys&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• The boys are playing in the park</li>
              <li>• There are three boys in the class</li>
              <li>• The boys team won the game</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Boys</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Boys</strong> (noun): Plural form of &quot;boy&quot; - multiple male children or young males.
          </p>
          <p>
            <strong>Boys</strong> (noun): A group of male children, adolescents, or young men.
          </p>
          <p>
            Used to refer to multiple male children, young males, or a group of males, typically under the age of adulthood.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Boys</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Lads</li>
              <li>• Youngsters</li>
              <li>• Children</li>
              <li>• Kids</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Youths</li>
              <li>• Adolescents</li>
              <li>• Teenagers</li>
              <li>• Guys</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Boys&quot; is always spelled with single &quot;s&quot; at the end, not double &quot;ss&quot;</li>
          <li>• The word follows the rule: add &quot;-s&quot; to words ending in &quot;y&quot; preceded by a vowel</li>
          <li>• The pronunciation is /bɔɪz/ (BOYZ)</li>
          <li>• &quot;Boyss&quot; is a common misspelling but is never correct</li>
          <li>• This spelling pattern applies to other words ending in &quot;oy&quot; like &quot;toys,&quot; &quot;joys,&quot; etc.</li>
          <li>• The word is used as a noun only (plural form)</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;boyss&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people confuse the plural rule for words ending in &quot;y.&quot; When &quot;y&quot; is preceded by a vowel (like &quot;oy&quot;), we simply add &quot;-s&quot;, not &quot;-ss.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;boyss&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;boyss&quot; is always incorrect. Always use &quot;boys&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;boy&quot; and &quot;boys&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Boy&quot; is the singular form (one male child), while &quot;boys&quot; is the plural form (multiple male children).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of the rule: when &quot;y&quot; is preceded by a vowel (like &quot;oy&quot;), just add &quot;-s&quot;. So boy + s = boys, just like toy + s = toys.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Boys</strong> is the correct spelling of this word. The incorrect spelling &quot;boyss&quot; should never be used.
          </p>
          <p>
            Remember: Boys = Boy + s. When &quot;y&quot; is preceded by a vowel (like &quot;oy&quot;), we simply add &quot;-s&quot; to form the plural, not &quot;-ss.&quot;
          </p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 