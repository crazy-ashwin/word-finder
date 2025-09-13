import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Actress or Aktres - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;actress&quot; and &quot;aktres&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ActressVsAktresPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Actress or Aktres</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;actress&quot; or &quot;aktres&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aktres</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aktres&quot; is a common misspelling. The correct spelling is &quot;actress&quot; with a &apos;c&apos; and double &apos;s&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Actress</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Actress&quot; is the correct spelling. It refers to a female actor, especially in plays, movies, or television shows.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Actress</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Actress</strong> (noun): A female actor; a woman who performs in plays, movies, or television shows.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She is a talented <strong>actress</strong> known for her versatility.</li>
              <li>• The <strong>actress</strong> won an award for her performance.</li>
              <li>• Many <strong>actresses</strong> start their careers in theater.</li>
              <li>• The movie features a famous <strong>actress</strong> in the lead role.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Actress</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Female actor</li>
                <li>• Performer</li>
                <li>• Artist</li>
                <li>• Entertainer</li>
                <li>• Thespian</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Star</li>
                <li>• Leading lady</li>
                <li>• Cast member</li>
                <li>• Supporting actress</li>
                <li>• Drama queen</li>
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
            <li>• <strong>Actress</strong> is spelled with a &apos;c&apos; and double &apos;s&apos;, not &quot;k&quot; or single &quot;s&quot;.</li>
            <li>• Used to describe women who act in performances.</li>
            <li>• Commonly used in theater, film, and television.</li>
            <li>• The male form is &quot;actor&quot;.</li>
            <li>• The plural is &quot;actresses&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aktres&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aktres&quot; is never correct. The proper spelling is always &quot;actress&quot; with a &apos;c&apos; and double &apos;s&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;actress&quot; has a &apos;c&apos; and double &apos;s&apos;, like &quot;success&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;actress&quot; refer to all genders?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Traditionally, &quot;actress&quot; refers to women, but &quot;actor&quot; is now often used for all genders.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;actress&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: leading actress, supporting actress, famous actress, aspiring actress.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aktres&quot; happens because the &apos;c&apos; is sometimes replaced with a &apos;k&apos; and the double &apos;s&apos; is reduced to one due to phonetic similarity.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Actress</strong> is the correct spelling with a &apos;c&apos; and double &apos;s&apos;. It refers to a female actor. The misspelling &quot;aktres&quot; is never correct. Use &quot;actress&quot; in theater, film, and television contexts.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 