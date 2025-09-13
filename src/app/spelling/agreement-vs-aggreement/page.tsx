import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Agreement or Aggreement - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;agreement&quot; and &quot;aggreement&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AgreementVsAggreementPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Agreement or Aggreement</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Understanding the difference between &quot;Agreement&quot; or &quot;Aggreement&quot;: these commonly confused spellings and how to use them properly.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aggreement</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aggreement&quot; is a misspelling. The correct spelling is &quot;agreement&quot; with a single &apos;g&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Agreement</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Agreement&quot; is the correct spelling. It means a mutual arrangement, contract, or understanding between parties.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Agreement</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Agreement</strong> (noun): A mutual arrangement, contract, or understanding between parties; harmony in opinion or feeling.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• They signed an <strong>agreement</strong> to work together.</li>
              <li>• There was general <strong>agreement</strong> among the members.</li>
              <li>• The two companies reached an <strong>agreement</strong>.</li>
              <li>• The contract is a legally binding <strong>agreement</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Agreement</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Contract</li>
                <li>• Arrangement</li>
                <li>• Understanding</li>
                <li>• Accord</li>
                <li>• Settlement</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Pact</li>
                <li>• Deal</li>
                <li>• Treaty</li>
                <li>• Consensus</li>
                <li>• Bargain</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Agreement</strong> is spelled with a single &apos;g&apos;, not double.</li>
            <li>• Commonly used in legal, business, and everyday contexts.</li>
            <li>• Means a mutual arrangement or understanding.</li>
            <li>• The word comes from Old French &quot;agreer&quot; meaning &quot;to please&quot;.</li>
            <li>• The verb form is &quot;agree&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aggreement&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aggreement&quot; is never correct. The proper spelling is always &quot;agreement&quot; with a single &apos;g&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;agreement&quot; has only one &apos;g&apos; like &quot;agree&quot; and &quot;agreeable&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between agreement and contract?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A contract is a formal, legally binding agreement, while an agreement can be informal or formal.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can agreement be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;agreement&quot; is appropriate in both formal and informal writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is agreement always about contracts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, it can also mean harmony in opinion or feeling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aggreement&quot; likely occurs because of confusion about the number of &apos;g&apos;s or unfamiliarity with the word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;agreement&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common phrases include: reach an agreement, sign an agreement, mutual agreement, and agreement in principle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;agreement&quot; be used in business writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;agreement&quot; is commonly used in business, legal, and everyday contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Agreement</strong> is the correct spelling with a single &apos;g&apos;. It means a mutual arrangement, contract, or understanding between parties. The misspelling &quot;aggreement&quot; is never correct. Use this word when talking about contracts, arrangements, or harmony in opinion.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 