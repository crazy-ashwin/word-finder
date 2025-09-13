import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Agreement or Agrement - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;agreement&quot; and &quot;agrement&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AgreementVsAgrementPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Agreement or Agrement
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Agreement or Agrement these commonly confused spellings and How to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Agrement</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Agrement&quot; is a misspelling. The correct spelling has an &apos;e&apos; before the &apos;e&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Agreement</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Agreement&quot; is the correct spelling. It means a mutual understanding or contract.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Agreement</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Agreement</strong> (noun): A mutual understanding or arrangement between two or more parties; a contract or formal arrangement; harmony or accord in opinion or feeling; the act of agreeing or coming to terms.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• We reached an <strong>agreement</strong> on the terms.</li>
              <li>• The <strong>agreement</strong> was signed by both parties.</li>
              <li>• There was general <strong>agreement</strong> among the committee.</li>
              <li>• The peace <strong>agreement</strong> ended the conflict.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Agreement</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Contract</li>
                <li>• Accord</li>
                <li>• Pact</li>
                <li>• Treaty</li>
                <li>• Deal</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Understanding</li>
                <li>• Consensus</li>
                <li>• Harmony</li>
                <li>• Concurrence</li>
                <li>• Settlement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Agreement</strong> is spelled with an &apos;e&apos; before the &apos;e&apos;, not without it.</li>
            <li>• It&apos;s commonly used in legal, business, and everyday contexts.</li>
            <li>• Often used with &quot;on&quot; or &quot;about&quot; (agreement on something).</li>
            <li>• Can be used for both formal and informal understandings.</li>
            <li>• The word comes from the Old French &quot;agrement&quot; meaning &quot;pleasure.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;agrement&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;agrement&quot; is never correct. The proper spelling is always &quot;agreement&quot; with an &apos;e&apos; before the &apos;e&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;agreement&quot; as being related to &quot;agree&quot; - both have an &apos;e&apos; before the &apos;e&apos; and relate to coming to terms. The word means mutual understanding, so it follows the same pattern.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;agreement&quot; and &quot;contract&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Agreement&quot; is a broader term that can refer to any mutual understanding, while &quot;contract&quot; specifically refers to a legally binding written agreement. All contracts are agreements, but not all agreements are contracts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;agreement&quot; be used in legal contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Agreement&quot; is commonly used in legal contexts to describe mutual understandings between parties. For example: &quot;The parties entered into an agreement&quot; or &quot;The agreement was legally binding.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;agreement&quot; related to &quot;agree&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Agreement&quot; is the noun form, while &quot;agree&quot; is the verb form. Both words share the same root and correct spelling pattern with an &apos;e&apos; before the &apos;e&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;agrement&quot; likely occurs because people may not hear the first &apos;e&apos; sound clearly in pronunciation, or they might think it follows a simpler spelling pattern without the extra &apos;e&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;agreement&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: agreement on, agreement about, reach an agreement, come to an agreement, sign an agreement, verbal agreement, written agreement, and mutual agreement. The word is often used in contexts involving understanding or contracts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;agreement&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;agreement&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, legal, and professional contexts to describe mutual understandings or contracts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Agreement</strong> is the correct spelling with an &apos;e&apos; before the &apos;e&apos;. It means a mutual understanding or arrangement between parties. The misspelling &quot;agrement&quot; without the first &apos;e&apos; is never correct. Use this word when you want to describe a contract, understanding, or harmony between parties.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 