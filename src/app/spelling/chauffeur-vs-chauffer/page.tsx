import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Chauffeur or Chauffer - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;chauffeur&quot; and &quot;chauffer&quot;. Discover definitions, usage examples, synonyms, notes, and FAQs to avoid common mistakes.',
}

export default function ChauffeurVsChaufferPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Chauffeur or Chauffer</h1>
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-4 mb-8">
        <p className="text-lg md:text-xl text-center text-blue-900 font-semibold">Comparing the correct and incorrect spellings of &quot;chauffeur&quot; and &quot;chauffer&quot;.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Incorrect Card */}
        <Card className="bg-red-50 border-l-4 border-red-500 w-full md:w-1/2">
          <CardContent className="py-6">
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">❌</span>
              <span className="text-2xl font-bold text-red-700">Chauffer</span>
            </div>
            <p className="text-lg md:text-xl text-red-800">This is a common misspelling and is not recognized as a correct word in English.</p>
          </CardContent>
        </Card>
        {/* Correct Card */}
        <Card className="bg-green-50 border-l-4 border-green-500 w-full md:w-1/2">
          <CardContent className="py-6">
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">✅</span>
              <span className="text-2xl font-bold text-green-700">Chauffeur</span>
            </div>
            <p className="text-lg md:text-xl text-green-800">This is the correct spelling, referring to a person employed to drive a private or hired car.</p>
          </CardContent>
        </Card>
      </div>
      {/* Definition Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed"><b>Chauffeur</b>: A person employed to drive a private or hired car. Example: &quot;The chauffeur opened the door for the passengers.&quot;</p>
      </section>
      {/* Synonyms Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <ul className="list-disc list-inside space-y-2">
            <li>Driver</li>
            <li>Motorist</li>
            <li>Operator</li>
            <li>Cabby</li>
            <li>Coachman</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Automobilist</li>
            <li>Car driver</li>
            <li>Private driver</li>
            <li>Personal driver</li>
            <li>Limousine driver</li>
          </ul>
        </div>
      </section>
      {/* Notes Section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Chauffeur&quot; is the correct spelling, derived from French.</li>
          <li>&quot;Chauffer&quot; is a common misspelling, often due to omitting the &quot;u&quot; before the &quot;e&quot;.</li>
          <li>Remember the double &quot;f&quot; in &quot;chauffeur&quot; comes after the &quot;u&quot;.</li>
        </ul>
      </div>
      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-lg md:text-xl text-gray-800">Q: What does &quot;chauffeur&quot; mean?</p>
            <p className="text-lg md:text-xl text-gray-700">A: It refers to a person employed to drive a private or hired car.</p>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl text-gray-800">Q: Is &quot;chauffer&quot; ever correct?</p>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;chauffer&quot; is not a recognized word in English and is considered a misspelling.</p>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl text-gray-800">Q: How can I remember the correct spelling?</p>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;u&quot; comes before the &quot;e&quot; and the word ends with &quot;eur&quot;.</p>
          </div>
        </div>
      </section>
      {/* Summary Section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Always use &quot;chauffeur&quot; as the correct spelling. &quot;Chauffer&quot; is a common misspelling and should be avoided in all writing.</p>
      </div>
    </div>
  )
} 