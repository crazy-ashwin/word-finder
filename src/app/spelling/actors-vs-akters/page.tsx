import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Actors or Akters - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;actors&quot; and &quot;akters&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ActorsVsAktersPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Actors or Akters</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;actors&quot; or &quot;akters&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Akters</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Akters&quot; is a common misspelling. The correct spelling is &quot;actors&quot; with a &apos;c&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Actors</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Actors&quot; is the correct spelling. It refers to people who perform in plays, movies, or television shows.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Actors</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Actors</strong> (noun): People who perform in plays, movies, or television shows.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The <strong>actors</strong> received a standing ovation.</li>
              <li>• She is one of the most talented <strong>actors</strong> in the industry.</li>
              <li>• The movie featured several famous <strong>actors</strong>.</li>
              <li>• Young <strong>actors</strong> often start in theater.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Actors</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Performers</li>
                <li>• Artists</li>
                <li>• Entertainers</li>
                <li>• Thespians</li>
                <li>• Cast members</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Actresses</li>
                <li>• Directors</li>
                <li>• Producers</li>
                <li>• Stage crew</li>
                <li>• Playwrights</li>
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
            <li>• <strong>Actors</strong> is spelled with a &apos;c&apos;, not &quot;k&quot;.</li>
            <li>• Used to describe people who act in performances.</li>
            <li>• Commonly used in theater, film, and television.</li>
            <li>• The singular form is &quot;actor&quot;.</li>
            <li>• The feminine form is &quot;actress&quot; (though &quot;actor&quot; is now often used for all genders).</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;akters&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;akters&quot; is never correct. The proper spelling is always &quot;actors&quot; with a &apos;c&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;actors&quot; has a &apos;c&apos; in the middle, not &quot;k&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;actors&quot; refer to both men and women?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;actor&quot; is now commonly used for all genders, though &quot;actress&quot; is still used for women.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;actors&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: leading actors, supporting actors, famous actors, aspiring actors.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;akters&quot; happens because the &apos;c&apos; is sometimes replaced with a &apos;k&apos; due to phonetic similarity.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Actors</strong> is the correct spelling with a &apos;c&apos;. It refers to people who perform in plays, movies, or TV. The misspelling &quot;akters&quot; is never correct. Use &quot;actors&quot; in theater, film, and television contexts.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 