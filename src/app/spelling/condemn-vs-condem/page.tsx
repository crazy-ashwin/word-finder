import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Condemn or Condem - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;condemn&quot; and &quot;condem&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CondemnVsCondemPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Condemn or Condem</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;condemn&quot; or &quot;condem&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Condem</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Condem&quot; is a common misspelling of &quot;condemn&quot;. Always use &quot;condemn&quot; when referring to expressing strong disapproval or sentencing someone to a punishment.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Condemn</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Condemn&quot; is a verb meaning to express strong disapproval of; to sentence someone to a particular punishment, especially death.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Condemn&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Condemn&quot;</strong> (verb): To express strong disapproval of; to sentence someone to a particular punishment, especially death.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in law, ethics, and everyday conversation to describe strong criticism or legal sentencing.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Condemn&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Denounce</li>
                <li>• Criticize</li>
                <li>• Censure</li>
                <li>• Blame</li>
                <li>• Sentence</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Convict</li>
                <li>• Doom</li>
                <li>• Reproach</li>
                <li>• Rebuke</li>
                <li>• Disapprove</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The judge will <span className="text-green-600 font-semibold">condemn</span> the criminal for his actions.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The judge will <span className="text-red-600 font-semibold">condem</span> the criminal for his actions.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Many people condemn violence in all forms.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Condemn&quot; is spelled with &quot;mn&quot; at the end, not just &quot;m&quot;.</li>
          <li>• The pronunciation is /kənˈdɛm/ (kuhn-DEM).</li>
          <li>• Commonly used in law, ethics, and conversation.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;condem&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;condem&quot; is never correct. The only correct form is &quot;condemn&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;condemn&quot; ends with &quot;mn&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the noun form of &quot;condemn&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The noun form is &quot;condemnation&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;condemn&quot; be used in religion?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;condemn&quot; is often used in religious contexts to describe moral disapproval.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;condemn&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;condemn to death&quot;, &quot;condemn strongly&quot;, &quot;condemn the actions&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Condemn</strong> is the correct spelling, while <strong>condem</strong> is always incorrect. Use &quot;condemn&quot; when referring to expressing strong disapproval or sentencing someone to a punishment.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 