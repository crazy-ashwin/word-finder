import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Comrade or Comrad - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;comrade&quot; and &quot;comrad&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ComradeVsComradPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Comrade or Comrad</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;comrade&quot; or &quot;comrad&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Comrad</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Comrad&quot; is a common misspelling of &quot;comrade&quot;. Always use &quot;comrade&quot; when referring to a companion, friend, or fellow member of an organization.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Comrade</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Comrade&quot; is a noun meaning a companion who shares one&apos;s activities or is a fellow member of an organization.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Comrade&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Comrade&quot;</strong> (noun): A companion who shares one&apos;s activities or is a fellow member of an organization.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is often used in military, political, or social contexts to refer to a close associate or friend.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Comrade&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Companion</li>
                <li>• Friend</li>
                <li>• Ally</li>
                <li>• Associate</li>
                <li>• Colleague</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Partner</li>
                <li>• Fellow</li>
                <li>• Confidant</li>
                <li>• Pal</li>
                <li>• Mate</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;He was a loyal <span className="text-green-600 font-semibold">comrade</span> during the campaign.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;He was a loyal <span className="text-red-600 font-semibold">comrad</span> during the campaign.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;She considered her colleagues to be comrades.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Comrade&quot; is spelled with &quot;ade&quot; at the end, not &quot;ad&quot;.</li>
          <li>• The pronunciation is /ˈkɒmreɪd/ (KOM-rayd).</li>
          <li>• Commonly used in military, political, and social contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;comrad&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;comrad&quot; is never correct. The only correct form is &quot;comrade&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;comrade&quot; ends with &quot;ade&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the plural of &quot;comrade&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The plural is &quot;comrades&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;comrade&quot; be used in a non-political sense?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;comrade&quot; can refer to any close companion or friend, not just in political or military contexts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;comrade&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;old comrade&quot;, &quot;comrade in arms&quot;, &quot;fellow comrade&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Comrade</strong> is the correct spelling with &quot;e&quot;: com-rade. It means a companion or fellow member of a group. The misspelling &quot;comrad&quot; is never correct. Always use &quot;comrade&quot; when referring to companions or fellow members.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 