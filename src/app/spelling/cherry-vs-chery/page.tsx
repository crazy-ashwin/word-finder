import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cherry vs Chery - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "cherry" and "chery". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'cherry vs chery, correct spelling, spelling comparison, English spelling, word confusion',
  openGraph: {
    title: 'Cherry vs Chery - Which is Correct?',
    description: 'Learn the correct spelling between "cherry" and "chery". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function CherryVsCheryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Cherry or Chery</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;Cherry&quot; or &quot;Chery&quot;, this fruit and common misspellings.
        </p>
      </div>

      <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
            ❌ Incorrect: Chery
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            <strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;cherry.&quot; The word &quot;cherry&quot; is spelled with two &quot;r&quot;s, not one.
          </p>
          <p className="text-lg md:text-xl text-red-800">
            <strong>Common Error:</strong> Dropping one of the &quot;r&quot; letters
          </p>
        </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
            ✅ Correct: Cherry
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            <strong>Definition:</strong> A small, round, red or black fruit with a stone in the center; also refers to the tree that produces this fruit.
          </p>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Part of Speech:</strong> Noun
          </p>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Cherry</strong> is the correct spelling with double &quot;r&quot;: cher-ry. It means a small, round, red fruit. The misspelling &quot;chery&quot; is never correct. Always use &quot;cherry&quot; when referring to this type of fruit.</p>
      </div>

      {/* Three Column Layout */}
      

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Cherry&quot; is pronounced as /ˈtʃeri/</li>
          <li>• The word comes from Old French &quot;cherise&quot; and Latin &quot;cerasum&quot;</li>
          <li>• There are many varieties of cherries: sweet cherries, sour cherries, black cherries</li>
          <li>• The word can also refer to the color cherry red</li>
          <li>• Remember: &quot;Cherry&quot; has two &quot;r&quot;s, just like &quot;berry&quot; has two &quot;r&quot;s</li>
          <li>• The plural form is &quot;cherries&quot; (change y to i + es)</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Cherry</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Fruit</h3>
            <p className="text-lg text-blue-700">Edible reproductive body of a plant</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Drupe</h3>
            <p className="text-lg text-blue-700">Fruit with a single seed surrounded by fleshy tissue</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Stone Fruit</h3>
            <p className="text-lg text-blue-700">Fruit with a hard pit or stone in the center</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Berry</h3>
            <p className="text-lg text-blue-700">Small, pulpy fruit (though cherries are technically drupes)</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Produce</h3>
            <p className="text-lg text-blue-700">Fresh fruits and vegetables</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Harvest</h3>
            <p className="text-lg text-blue-700">The yield of fruits collected from trees</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Correct:</strong> &quot;She picked a ripe <span className="text-green-600 font-semibold">cherry</span> from the tree.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800">
              <strong>Incorrect:</strong> &quot;She picked a ripe <span className="text-red-600 font-semibold">chery</span> from the tree.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">cherry</span> tree was full of blossoms in spring.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Correct:</strong> &quot;He made a delicious <span className="text-green-600 font-semibold">cherry</span> pie for dessert.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Why do people misspell &quot;cherry&quot; as &quot;chery&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: This misspelling often occurs because people drop one of the &quot;r&quot; letters. This can happen due to fast typing, phonetic confusion, or simply not remembering that the word has two &quot;r&quot;s. It&apos;s a common error similar to misspelling &quot;berry&quot; as &quot;bery.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What is the origin of the word &quot;cherry&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: The word &quot;cherry&quot; comes from Old French &quot;cherise&quot; and ultimately from Latin &quot;cerasum.&quot; The fruit was introduced to Europe from Asia Minor, and the word has been used in English since the 14th century.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Are there different types of cherries?</h3>
            <p className="text-lg text-blue-800">
              A: Yes, there are many varieties of cherries. The main categories are sweet cherries (like Bing, Rainier) and sour cherries (like Montmorency). There are also black cherries, white cherries, and many other cultivars with different flavors and uses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Can &quot;cherry&quot; refer to anything other than the fruit?</h3>
            <p className="text-lg text-blue-800">
              A: Yes, &quot;cherry&quot; can also refer to the cherry tree itself, the wood from cherry trees, the color cherry red, and in some contexts, it can be used as a modifier (like &quot;cherry pie&quot; or &quot;cherry flavor&quot;).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: How can I remember the correct spelling of &quot;cherry&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: Think of related words like &quot;berry&quot; - both have two &quot;r&quot;s. You can also remember that &quot;cherry&quot; rhymes with &quot;berry,&quot; and both words follow the same spelling pattern with double &quot;r&quot;s.
            </p>
          </div>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/front-vs-front" className="text-blue-700 hover:text-blue-900 underline">Front vs Front</a></li>
            <li><a href="/spelling/full-vs-full" className="text-blue-700 hover:text-blue-900 underline">Full vs Full</a></li>
            <li><a href="/spelling/fun-vs-fun" className="text-blue-700 hover:text-blue-900 underline">Fun vs Fun</a></li>
            <li><a href="/spelling/future-vs-future" className="text-blue-700 hover:text-blue-900 underline">Future vs Future</a></li>
            <li><a href="/spelling/game-vs-game" className="text-blue-700 hover:text-blue-900 underline">Game vs Game</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/berry-vs-bery" className="text-purple-700 hover:text-purple-900 underline">Berry vs Bery</a></li>
            <li><a href="/spelling/strawberry-vs-strawbery" className="text-purple-700 hover:text-purple-900 underline">Strawberry vs Strawbery</a></li>
            <li><a href="/spelling/blueberry-vs-bluebery" className="text-purple-700 hover:text-purple-900 underline">Blueberry vs Bluebery</a></li>
            <li><a href="/spelling/raspberry-vs-raspbery" className="text-purple-700 hover:text-purple-900 underline">Raspberry vs Raspbery</a></li>
            <li><a href="/spelling/blackberry-vs-blackbery" className="text-purple-700 hover:text-purple-900 underline">Blackberry vs Blackbery</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/double-consonants" className="text-green-700 hover:text-green-900 underline">Double Consonants</a></li>
            <li><a href="/grammar/rr-patterns" className="text-green-700 hover:text-green-900 underline">Rr Patterns</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 