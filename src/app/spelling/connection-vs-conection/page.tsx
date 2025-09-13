import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Connection or Conection - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;connection&quot; and &quot;conection&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ConnectionVsConectionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Connection or Conection</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;connection&quot; or &quot;conection&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Conection</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Conection&quot; is a common misspelling of &quot;connection&quot;. Always use &quot;connection&quot; when referring to a relationship or link between things.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Connection</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Connection&quot; is a noun meaning a relationship or link between people, things, or ideas; also refers to a means of communication or transport.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Connection&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Connection&quot;</strong> (noun): A relationship or link between people, things, or ideas; a means of communication or transport.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in technology, relationships, and everyday conversation to describe links or relationships.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Connection&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Link</li>
                <li>• Relationship</li>
                <li>• Association</li>
                <li>• Bond</li>
                <li>• Tie</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Attachment</li>
                <li>• Affiliation</li>
                <li>• Contact</li>
                <li>• Network</li>
                <li>• Coupling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;The internet <span className="text-green-600 font-semibold">connection</span> was fast.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The internet <span className="text-red-600 font-semibold">conection</span> was fast.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;They have a strong connection to their community.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Connection&quot; is spelled with double &quot;n&quot; in the middle.</li>
          <li>• The pronunciation is /kəˈnɛkʃən/ (kuh-NEK-shun).</li>
          <li>• Commonly used in technology, relationships, and conversation.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;conection&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;conection&quot; is never correct. The only correct form is &quot;connection&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;connection&quot; has double &quot;n&quot; in the middle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the verb form of &quot;connection&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The verb form is &quot;connect&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;connection&quot; be used in technology?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;connection&quot; is often used in technology to describe internet or network links.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;connection&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;internet connection&quot;, &quot;strong connection&quot;, &quot;connection to the community&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Connection</strong> is the correct spelling with double &quot;n&quot;: con-nec-tion. It means a link or relationship between things. The misspelling &quot;conection&quot; is never correct. Always use &quot;connection&quot; when referring to links or relationships.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 