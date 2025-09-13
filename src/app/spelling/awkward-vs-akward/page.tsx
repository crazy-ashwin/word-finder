import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Awkward or Akward - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;awkward&quot; and &quot;akward&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AwkwardVsAkwardPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Awkward or Akward</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;awkward&quot; or &quot;akward&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Akward</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Akward&quot; is a common misspelling. The correct spelling is &quot;awkward&quot; with a &apos;w&apos; after the &apos;k&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Awkward</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Awkward&quot; is the correct spelling. It means causing difficulty, embarrassment, or inconvenience; not smooth or graceful.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Awkward</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Awkward</strong> (adjective): Causing difficulty, embarrassment, or inconvenience; not smooth or graceful.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• There was an <strong>awkward</strong> silence in the room.</li>
              <li>• He felt <strong>awkward</strong> at the party.</li>
              <li>• The conversation became <strong>awkward</strong> after the mistake.</li>
              <li>• She made an <strong>awkward</strong> movement and dropped the glass.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Awkward</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Clumsy</li>
                <li>• Uncomfortable</li>
                <li>• Inept</li>
                <li>• Uncoordinated</li>
                <li>• Embarrassing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Gawky</li>
                <li>• Stiff</li>
                <li>• Awkwardness</li>
                <li>• Blundering</li>
                <li>• Unwieldy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Awkward</strong> is spelled with a &apos;w&apos; after the &apos;k&apos;, not &quot;akward&quot;.</li>
            <li>• Used to describe situations, people, or movements that are uncomfortable or clumsy.</li>
            <li>• Commonly used in social, physical, and emotional contexts.</li>
            <li>• The noun form is &quot;awkwardness&quot;.</li>
            <li>• The opposite is &quot;graceful&quot; or &quot;comfortable&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;akward&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;akward&quot; is never correct. The proper spelling is always &quot;awkward&quot; with a &apos;w&apos; after the &apos;k&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;awkward&quot; has a &apos;w&apos; after the &apos;k&apos;, like &quot;awk&quot; (as in &quot;awkward&quot; situations).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;awkward&quot; describe a movement?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;awkward&quot; can describe movements that are clumsy or not smooth.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;awkward&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: awkward silence, awkward moment, awkward position, awkward conversation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;akward&quot; happens because the &apos;w&apos; is sometimes forgotten or omitted.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Awkward</strong> is the correct spelling with a &apos;w&apos; after the &apos;k&apos;. It means uncomfortable, clumsy, or embarrassing. The misspelling &quot;akward&quot; is never correct. Use &quot;awkward&quot; in social, physical, and emotional contexts.        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 