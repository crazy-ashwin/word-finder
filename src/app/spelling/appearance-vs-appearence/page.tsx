import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Appearance or Appearence - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;appearance&quot; and &quot;appearence&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AppearanceVsAppearencePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Appearance or Appearence</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;appearance&quot; and &quot;appearence&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Appearence</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Appearence&quot; is a misspelling. The correct spelling is &quot;appearance&quot; with two &quot;p&quot;s and two &quot;r&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Appearance</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Appearance&quot; is the correct spelling. It means the way something looks or seems to be.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Appearance (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The way something or someone looks; the outward aspect or form of something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Her <strong>appearance</strong> was neat and professional.</li>
                  <li>• The building&apos;s <strong>appearance</strong> has changed over the years.</li>
                  <li>• Don&apos;t judge by <strong>appearance</strong> alone.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Appearence (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Appearence&quot; is a misspelling of &quot;appearance&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Appearence&quot; is not used in standard English.</li>
                  <li>• Always use <strong>appearance</strong> when referring to looks.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Appearance:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Look</li>
                <li>• Aspect</li>
                <li>• Form</li>
                <li>• Image</li>
                <li>• Presentation</li>
                <li>• Outward</li>
                <li>• Visage</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Appearence:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Appearance</strong> is spelled with two &quot;p&quot;s and two &quot;r&quot;s.</li>
            <li>• Used to describe how something or someone looks.</li>
            <li>• Can refer to physical looks or outward impressions.</li>
            <li>• The word comes from the verb &quot;appear&quot; + the suffix &quot;-ance.&quot;</li>
            <li>• &quot;Appearence&quot; is never correct in any context.</li>
            <li>• Often used in phrases like &quot;appearance of&quot; or &quot;make an appearance.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;appearence&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appearence&quot; is never correct. The proper spelling is always &quot;appearance&quot; with two &quot;p&quot;s and two &quot;r&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ap-pear-ance&quot; - it&apos;s the noun form of &quot;appear&quot; with &quot;-ance&quot; added.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between appearance and look?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to how something appears, but &quot;appearance&quot; is more formal and can refer to broader impressions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can appearance be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;appearance&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;appearence&quot; likely occurs because of confusion about the double consonants or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;appearance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: appearance of, make an appearance, physical appearance, and public appearance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is appearance always about physical looks?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appearance&quot; can refer to how something seems or appears to be, not just physical appearance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can appearance be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appearance&quot; is a noun. The verb form is &quot;appear&quot; (to appear somewhere).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Appearance</strong> is the correct spelling with two &quot;p&quot;s and two &quot;r&quot;s. It means the way something or someone looks or seems to be. The misspelling &quot;appearence&quot; is never correct. Use &quot;appearance&quot; to describe looks or outward impressions.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 