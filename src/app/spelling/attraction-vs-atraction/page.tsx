import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Attraction vs Atraction - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "attraction" and "atraction". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AttractionVsAtractionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Attraction or Atraction</h1>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block">
          <p className="text-lg md:text-xl font-semibold">Which spelling is correct?</p>
        </div>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-200 bg-red-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">❌</span>
            <h2 className="text-2xl font-bold text-red-800">Incorrect</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-red-600 mb-4">atraction</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">attraction</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling of the noun meaning the act of attracting or something that attracts.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Attraction (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              The act or power of attracting. Something that draws attention or interest. A feeling of being drawn 
              toward someone or something. A place or event that draws visitors.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>The amusement park is a popular tourist <strong>attraction</strong>.</li>
              <li>There was an immediate <strong>attraction</strong> between them.</li>
              <li>The museum&apos;s main <strong>attraction</strong> is the dinosaur exhibit.</li>
              <li>Magnetic <strong>attraction</strong> pulls metal objects together.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;attraction&quot; and &quot;atraction&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings would sound similar when pronounced</li>
            <li><strong>Common misspelling:</strong> Many people drop the first &quot;t&quot; when spelling the word</li>
            <li><strong>Inconsistent English spelling rules:</strong> Some words do have silent letters</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
            <li><strong>Typographical errors:</strong> Missing letters when typing quickly</li>
            <li><strong>Influence from other words:</strong> Words like &quot;action&quot; don&apos;t have double &quot;t&quot;</li>
          </ul>
        </div>
      </Card>

      {/* Grammar Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Grammar Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Spelling rule:</strong> The word &quot;attraction&quot; comes from the Latin word &quot;attractio&quot; and includes 
            two &quot;t&quot; letters, both of which are pronounced.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Related words:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li><strong>attract</strong> (verb)</li>
              <li><strong>attractive</strong> (adjective)</li>
              <li><strong>attractively</strong> (adverb)</li>
              <li><strong>attractiveness</strong> (noun)</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Note:</strong> All related words include both &quot;t&quot; letters and follow the same spelling pattern.
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Attraction&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Physical:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>draw</li>
              <li>pull</li>
              <li>magnetism</li>
              <li>appeal</li>
              <li>charm</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Emotional:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>interest</li>
              <li>fascination</li>
              <li>allure</li>
              <li>enticement</li>
              <li>lure</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;attraction&quot; when referring to the act of attracting or something that draws interest</li>
            <li>Remember that &quot;attraction&quot; has two &quot;t&quot; letters</li>
            <li>Common contexts include tourism, relationships, physics, and entertainment</li>
            <li>The word &quot;attraction&quot; can refer to both physical and emotional drawing power</li>
            <li>Always spell it as &quot;attraction&quot; not &quot;atraction&quot;</li>
            <li>Think of it as &quot;attract&quot; + &quot;ion&quot; to remember the spelling</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;atraction&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;atraction&quot; is never correct in standard English. The correct spelling is always &quot;attraction.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the difference between &quot;attraction&quot; and &quot;action&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: &quot;Attraction&quot; refers to the act of drawing or pulling toward, while &quot;action&quot; refers to 
              the fact or process of doing something.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;attraction&quot; has two &quot;t&quot; letters. Think of it as &quot;attract&quot; + &quot;ion&quot; 
              or use the mnemonic: &quot;Attraction has two &apos;t&apos;s for &apos;tugging&apos; and &apos;traction&apos;.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a common spelling mistake. Many people drop the first &quot;t&quot; when writing &quot;attraction,&quot; 
              especially when typing quickly or relying on phonetic spelling.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Can &quot;attraction&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;attraction&quot; can be used in various contexts including tourism, relationships, 
              physics, entertainment, and social interactions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What about the verb form?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: The verb form is &quot;attract&quot; and it also follows the same spelling pattern with two &quot;t&quot; letters.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Attraction&quot;</strong> is the correct spelling of the noun meaning the act of attracting or something that draws attention or interest. 
          The spelling &quot;atraction&quot; is incorrect and should never be used. Remember that &quot;attraction&quot; has two &quot;t&quot; letters 
          and comes from the Latin word &quot;attractio.&quot; This is a common spelling mistake, so it&apos;s important to remember 
          the correct spelling pattern.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 