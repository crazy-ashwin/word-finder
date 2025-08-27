import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Because or Becase - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;because&quot; and &quot;becase&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BecauseVsBecasePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Because or Becase</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;because&quot; and &quot;becase&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Becase</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Becase&quot; is a misspelling. The correct spelling is &quot;because&quot; with &quot;au&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Because</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Because&quot; is the correct spelling. It means for the reason that or since.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Because (conjunction):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">For the reason that; since; as a result of the fact that.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I stayed home <strong>because</strong> it was raining.</li>
                  <li>• She was late <strong>because</strong> of traffic.</li>
                  <li>• He couldn&apos;t come <strong>because</strong> he was sick.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Becase (conjunction):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Becase&quot; is a misspelling of &quot;because&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Becase&quot; is not used in standard English.</li>
                  <li>• Always use <strong>because</strong> when explaining reasons.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Because:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Since</li>
                <li>• As</li>
                <li>• For</li>
                <li>• Given that</li>
                <li>• Inasmuch as</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Becase:</h4>
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
          <li>• <strong>Because</strong> is spelled with &quot;au&quot; in the middle, not &quot;a.&quot;</li>
          <li>• The word comes from the Middle English &quot;bi cause&quot; meaning &quot;by cause.&quot;</li>
          <li>• Used to introduce a reason or explanation.</li>
          <li>• Can be used at the beginning or middle of a sentence.</li>
          <li>• &quot;Becase&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;becase&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;becase&quot; is never correct. The proper spelling is always &quot;because.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;be&quot; + &quot;cause&quot; - the word explains the cause of something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between because and since?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both can introduce reasons, but &quot;since&quot; can also refer to time, while &quot;because&quot; only refers to reasons.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can because be used at the beginning of a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;because&quot; can be used at the beginning of a sentence, though it&apos;s more common in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;becase&quot; likely occurs because of the unusual &quot;au&quot; spelling pattern.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;because&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: because of, because why, just because, and because I said so.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Because</strong> is the correct spelling with &quot;au&quot; in the middle. It means for the reason that or since. The misspelling &quot;becase&quot; is never correct. Use &quot;because&quot; to introduce reasons or explanations.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/companies-vs-companys" className="text-blue-700 hover:text-blue-900 underline">Companies vs Companys</a></li>
            <li><a href="/spelling/slipped-vs-sliped" className="text-blue-700 hover:text-blue-900 underline">Slipped vs Sliped</a></li>
            <li><a href="/spelling/syphilis-vs-syphyllis" className="text-blue-700 hover:text-blue-900 underline">Syphilis vs Syphyllis</a></li>
            <li><a href="/spelling/separate-vs-seperate" className="text-blue-700 hover:text-blue-900 underline">Separate vs Seperate</a></li>
            <li><a href="/spelling/definitely-vs-definately" className="text-blue-700 hover:text-blue-900 underline">Definitely vs Definately</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/since-vs-sence" className="text-purple-700 hover:text-purple-900 underline">Since vs Sence</a></li>
            <li><a href="/spelling/although-vs-allthough" className="text-purple-700 hover:text-purple-900 underline">Although vs Allthough</a></li>
            <li><a href="/spelling/unless-vs-unlesss" className="text-purple-700 hover:text-purple-900 underline">Unless vs Unlesss</a></li>
            <li><a href="/spelling/while-vs-whyle" className="text-purple-700 hover:text-purple-900 underline">While vs Whyle</a></li>
            <li><a href="/spelling/until-vs-untill" className="text-purple-700 hover:text-purple-900 underline">Until vs Untill</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/conjunctions" className="text-green-700 hover:text-green-900 underline">Conjunctions</a></li>
            <li><a href="/grammar/5th-grade-worksheets-parts-of-speech" className="text-green-700 hover:text-green-900 underline">Parts of Speech Worksheets</a></li>
            <li><a href="/grammar/grammar-rules" className="text-green-700 hover:text-green-900 underline">Grammar Rules</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-helping-verbs" className="text-green-700 hover:text-green-900 underline">Helping Verbs Worksheets</a></li>
            <li><a href="/grammar/4th-grade-worksheets-past-continuous-tense" className="text-green-700 hover:text-green-900 underline">Past Continuous Tense</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 