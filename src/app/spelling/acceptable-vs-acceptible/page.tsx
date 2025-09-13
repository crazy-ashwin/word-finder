import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Acceptable or Acceptible - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;acceptable&quot; and &quot;acceptible&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AcceptableVsAcceptiblePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Acceptable or Acceptible</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;acceptable&quot; and &quot;acceptible&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Acceptible</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Acceptible&quot; is a misspelling. The correct spelling is &quot;acceptable&quot; with &quot;able&quot; ending.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Acceptable</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Acceptable&quot; is the correct spelling. It means satisfactory or adequate.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Acceptable (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Satisfactory or adequate; able to be accepted or approved.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The quality of work is <strong>acceptable</strong>.</li>
                  <li>• This behavior is not <strong>acceptable</strong> in our school.</li>
                  <li>• The price is <strong>acceptable</strong> for the service.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Acceptible (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Acceptible&quot; is a misspelling of &quot;acceptable&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Acceptible&quot; is not used in standard English.</li>
                  <li>• Always use <strong>acceptable</strong> when referring to something satisfactory.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Acceptable:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Satisfactory</li>
                <li>• Adequate</li>
                <li>• Suitable</li>
                <li>• Tolerable</li>
                <li>• Passable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Acceptible:</h4>
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
            <li>• <strong>Acceptable</strong> is spelled with &quot;able&quot; ending, not &quot;ible.&quot;</li>
            <li>• The word comes from &quot;accept&quot; + &quot;able&quot; suffix.</li>
            <li>• Used to describe something that is satisfactory or adequate.</li>
            <li>• Common in both formal and informal writing.</li>
            <li>• &quot;Acceptible&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;acceptible&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;acceptible&quot; is never correct. The proper spelling is always &quot;acceptable.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;accept&quot; + &quot;able&quot; - remember the &quot;able&quot; ending, not &quot;ible.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between acceptable and suitable?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Acceptable&quot; means satisfactory or adequate, while &quot;suitable&quot; means appropriate or fitting for a purpose.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can acceptable be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;acceptable&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;acceptible&quot; likely occurs because of confusion about the &quot;able&quot; vs &quot;ible&quot; ending.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;acceptable&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: acceptable behavior, acceptable quality, acceptable level, acceptable standard, and acceptable use.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Acceptable</strong> is the correct spelling with &quot;able&quot; at the end. It means satisfactory or adequate. The misspelling &quot;acceptible&quot; with &quot;ible&quot; is never correct. Always use &quot;acceptable&quot; when referring to adequate standards.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 