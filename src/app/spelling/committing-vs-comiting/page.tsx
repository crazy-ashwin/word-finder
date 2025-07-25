import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Committing or Comiting - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;committing&quot; and &quot;comiting&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CommittingVsComitingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Committing or Comiting</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;committing&quot; and &quot;comiting&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Comiting</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Comiting&quot; is a misspelling. The correct spelling is &quot;committing&quot; with a double &quot;t&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Committing</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Committing&quot; is the correct spelling. It means to perpetrate or carry out (a mistake, crime, or act).</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Committing (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To perpetrate or carry out (a mistake, crime, or immoral act).</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He is <strong>&quot;committing&quot;</strong> to his studies this year.</li>
                  <li>• She was accused of <strong>&quot;committing&quot;</strong> a serious error.</li>
                  <li>• They are <strong>&quot;committing&quot;</strong> to a new project.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Comiting:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Comiting&quot; is a misspelling of &quot;committing&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Comiting&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;committing&quot;</strong> when referring to carrying out an action.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Committing:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Carry out</li>
                <li>• Do</li>
                <li>• Perform</li>
                <li>• Perpetrate</li>
                <li>• Engaging</li>
                <li>• Executing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Comiting:</h4>
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
            <li>• <strong>&quot;Committing&quot;</strong> is always spelled with a double &quot;t&quot; in the middle.</li>
            <li>• Used as a verb in English, meaning to carry out or perform an action.</li>
            <li>• &quot;Comiting&quot; is never correct in any context.</li>
            <li>• Remember: double &quot;t&quot; for the correct spelling.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;comiting&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;comiting&quot; is never correct. The proper spelling is always &quot;committing.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;committing&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means to perpetrate or carry out an act, mistake, or crime.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the double &quot;t&quot; in the middle: commi<strong>tt</strong>ing.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Committing&quot;</strong> is the correct spelling with a double &quot;t&quot; in the middle. It means to perpetrate or carry out an act. The misspelling &quot;comiting&quot; is never correct. Use &quot;committing&quot; in all contexts.</p>
      </div>
    </div>
  )
} 