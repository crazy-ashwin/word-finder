import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Always or Alway - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;always&quot; and &quot;alway&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AlwaysVsAlwayPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Always or Alway</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;always&quot; and &quot;alway&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alway</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alway&quot; is archaic. The correct spelling is &quot;always&quot; with an &quot;s&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Always</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Always&quot; is the correct spelling. It means at all times or forever.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Always (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">At all times; on every occasion; forever; without exception.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>always</strong> arrives on time.</li>
                  <li>• He <strong>always</strong> helps others.</li>
                  <li>• The sun <strong>always</strong> rises in the east.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alway (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alway&quot; is an archaic form of &quot;always&quot; that is no longer used in modern English.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• Used only in old literature or poetry</li>
                  <li>• Not appropriate for modern writing</li>
                  <li>• Always use <strong>always</strong> in contemporary English</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Always:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Forever</li>
                <li>• Constantly</li>
                <li>• Perpetually</li>
                <li>• Invariably</li>
                <li>• Consistently</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alway:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (Archaic form; use modern synonyms)</li>
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
            <li>• <strong>Always</strong> is the modern spelling with an &quot;s&quot; at the end.</li>
            <li>• Used to indicate something that happens at all times or without exception.</li>
            <li>• Can be used in various positions within a sentence.</li>
            <li>• &quot;Alway&quot; is an archaic form found only in old literature.</li>
            <li>• Always use the modern spelling in contemporary writing.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alway&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Only in very old literature or poetry. For modern writing, always use &quot;always.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;al-ways&quot; - it always has an &quot;s&quot; at the end in modern English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between always and forever?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Always&quot; can refer to habitual actions, while &quot;forever&quot; specifically means for all time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can always be used at the beginning of a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;always&quot; can be used at the beginning, middle, or end of sentences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;always&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: always and forever, always remember, and always be prepared.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people sometimes use &quot;alway&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People might encounter &quot;alway&quot; in old literature or poetry and mistakenly think it&apos;s still current.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can always be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;always&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is always always about time?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;always&quot; always refers to time - either all the time or on every occasion.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Always</strong> is the correct modern spelling with an &quot;s&quot; at the end. It means at all times or forever. The archaic form &quot;alway&quot; is no longer used in contemporary English. Always use the modern spelling in your writing.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 