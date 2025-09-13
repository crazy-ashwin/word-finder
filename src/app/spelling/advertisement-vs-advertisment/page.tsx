import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Advertisement or Advertisment - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;advertisement&quot; and &quot;advertisment&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdvertisementVsAdvertismentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Advertisement or Advertisment
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Advertisement&quot; or &quot;Advertisment&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Advertisment</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Advertisment&quot; is a misspelling. The correct spelling is &quot;advertisement&quot; with &apos;e&apos; before &apos;ment&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Advertisement</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Advertisement&quot; is the correct spelling. It means a notice or announcement promoting a product or service.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Advertisement</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Advertisement</strong> (noun): A notice or announcement, especially one promoting a product, service, or event; a public promotion of some product or service; commercial message designed to sell something.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The company placed an <strong>advertisement</strong> in the local newspaper.</li>
              <li>• Television <strong>advertisements</strong> reached millions of viewers.</li>
              <li>• The <strong>advertisement</strong> featured a celebrity endorsing the product.</li>
              <li>• Online <strong>advertisements</strong> appear on social media platforms.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Advertisement</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Ad</li>
                <li>• Commercial</li>
                <li>• Promotion</li>
                <li>• Announcement</li>
                <li>• Notice</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Publicity</li>
                <li>• Marketing</li>
                <li>• Campaign</li>
                <li>• Endorsement</li>
                <li>• Sponsored content</li>
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
            <li>• <strong>Advertisement</strong> is spelled with &apos;e&apos; before &apos;ment&apos;, not just &apos;ment&apos;.</li>
            <li>• It&apos;s commonly used in business, marketing, and media contexts.</li>
            <li>• Often shortened to &quot;ad&quot; in informal contexts.</li>
            <li>• The word comes from the verb &quot;advertise&quot; + the suffix &quot;-ment.&quot;</li>
            <li>• Used in both singular and plural forms.</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;advertisment&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;advertisment&quot; is never correct. The proper spelling is always &quot;advertisement&quot; with &apos;e&apos; before &apos;ment&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;advertisement&quot; as coming from &quot;advertise&quot; + &quot;ment.&quot; The verb &quot;advertise&quot; has an &apos;e&apos; at the end, so the noun keeps that &apos;e&apos; before adding &apos;ment.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between advertisement and advertising?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Advertisement&quot; is a noun referring to a specific ad or notice, while &quot;advertising&quot; is a noun referring to the overall process or industry of creating ads.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can advertisement be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;advertisement&quot; is only used as a noun. The verb form is &quot;advertise.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is advertisement always commercial?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While often commercial, &quot;advertisement&quot; can also refer to non-commercial notices, such as public service announcements or event notices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;advertisment&quot; likely occurs because people may not remember the &apos;e&apos; before &apos;ment&apos; or may confuse it with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;advertisement&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: classified advertisement, display advertisement, television advertisement, online advertisement, and print advertisement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;advertisement&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;advertisement&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Advertisement</strong> is the correct spelling with &apos;e&apos; before &apos;ment&apos;. It means a notice or announcement promoting a product or service. The misspelling &quot;advertisment&quot; without the &apos;e&apos; is never correct. Use this word when referring to promotional notices or commercial messages.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 