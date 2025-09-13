import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Addition or Addittion - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;addition&quot; and &quot;addittion&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdditionVsAddittionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Addition or Addittion
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Addition or Addittion these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Addittion</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Addittion&quot; is a misspelling. The correct spelling has only one &apos;t&apos; in the middle.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Addition</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Addition&quot; is the correct spelling. It means the process of adding something.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Addition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Addition</strong> (noun): The process of adding something; something that has been added; the act of combining or joining things together.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The new wing is a welcome <strong>addition</strong> to the hospital.</li>
              <li>• In <strong>addition</strong> to his salary, he receives benefits.</li>
              <li>• The <strong>addition</strong> of salt improved the flavor of the soup.</li>
              <li>• She made several <strong>additions</strong> to her collection.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Addition</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Inclusion</li>
                <li>• Supplement</li>
                <li>• Appendage</li>
                <li>• Extension</li>
                <li>• Increase</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Augmentation</li>
                <li>• Enhancement</li>
                <li>• Attachment</li>
                <li>• Appendage</li>
                <li>• Extra</li>
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
            <li>• <strong>Addition</strong> is spelled with only one &apos;t&apos; in the middle.</li>
            <li>• It&apos;s commonly used in both mathematical and general contexts.</li>
            <li>• In mathematics, it refers to the process of combining numbers.</li>
            <li>• In general usage, it refers to something that has been added or included.</li>
            <li>• The word comes from the Latin &quot;additio&quot; meaning &quot;addition.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;addittion&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;addittion&quot; is never correct. The proper spelling is always &quot;addition&quot; with only one &apos;t&apos; in the middle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;addition&quot; as &quot;add&quot; + &quot;ition&quot; - you&apos;re adding something, so remember only one &apos;t&apos; in the middle. The word comes from Latin &quot;additio&quot; meaning &quot;addition.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between addition and supplement?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Both words refer to something added, but &quot;addition&quot; is more general, while &quot;supplement&quot; often implies something that completes or enhances what already exists.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can addition be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;addition&quot; is only used as a noun. The verb form would be &quot;add.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is addition used in mathematics?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Addition&quot; is a fundamental mathematical operation. It refers to the process of combining numbers to find their sum.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;addittion&quot; likely occurs because people may think it follows the pattern of other words with double consonants, or they may confuse it with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;addition&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: in addition to, welcome addition, recent addition, latest addition, new addition, and valuable addition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;addition&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;addition&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Addition</strong> is the correct spelling with one &apos;t&apos; in the middle. It means the process of adding something; something that has been added. The misspelling &quot;addittion&quot; with double &apos;t&apos; is never correct. Use this word when you want to describe something added or the process of adding.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 