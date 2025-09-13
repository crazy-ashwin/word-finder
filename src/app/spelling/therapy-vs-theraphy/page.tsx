import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Therapy or Theraphy - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;therapy&quot; and &quot;theraphy&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TherapyVsTheraphyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Therapy or Theraphy</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;therapy&quot; and &quot;theraphy&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Theraphy</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Theraphy&quot; is a misspelling. The correct spelling is &quot;therapy&quot; with &quot;py&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Therapy</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Therapy&quot; is the correct spelling. It means treatment for illness or injury.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Therapy (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Treatment intended to relieve or heal a disorder; a form of treatment for physical or mental illness.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She started physical <strong>therapy</strong> after her injury.</li>
                  <li>• Cognitive behavioral <strong>therapy</strong> helped with anxiety.</li>
                  <li>• The <strong>therapy</strong> sessions were very helpful.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Theraphy (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Theraphy&quot; is a misspelling of &quot;therapy&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Theraphy&quot; is not used in standard English.</li>
                  <li>• Always use <strong>therapy</strong> when referring to treatment.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Therapy:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Treatment</li>
                <li>• Healing</li>
                <li>• Rehabilitation</li>
                <li>• Remedy</li>
                <li>• Cure</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Theraphy:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Therapy</strong> is spelled with &quot;py&quot; at the end: ther-a-py.</li>
            <li>• It is a common word for medical or psychological treatment.</li>
            <li>• &quot;Theraphy&quot; is never correct in any context.</li>
            <li>• The word comes from Greek &quot;therapeia&quot; meaning &quot;healing.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;theraphy&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;theraphy&quot; is never correct. The proper spelling is always &quot;therapy.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;therapy&quot; ends with &quot;py&quot; - think of it as &quot;ther-a-py.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between therapy and treatment?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Therapy is a specific type of treatment, often involving ongoing sessions or specialized techniques.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;therapy&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;therapy&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;therapy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;theraphy&quot; often happens by replacing &quot;py&quot; with &quot;phy&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;therapy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: physical therapy, occupational therapy, speech therapy, and group therapy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;therapy&quot; always medical?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;therapy&quot; can refer to various types of treatment, including psychological, physical, or alternative therapies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;therapy&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;therapy&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Therapy</strong> is the correct spelling with &quot;py&quot; at the end. It means treatment for illness or problems. The misspelling &quot;theraphy&quot; with &quot;phy&quot; is never correct. Always use &quot;therapy&quot; when referring to treatment or healing.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 