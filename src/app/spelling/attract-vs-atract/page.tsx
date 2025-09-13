import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Attract or Atract - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;attract&quot; and &quot;atract&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AttractVsAtractPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Attract or Atract</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;attract&quot; and &quot;atract&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Atract</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Atract&quot; is a misspelling. The correct spelling is &quot;attract&quot; with two &quot;t&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Attract</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Attract&quot; is the correct spelling. It means to draw or pull toward oneself.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Attract (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To draw or pull toward oneself; to cause to come near or adhere.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The bright colors <strong>attract</strong> attention.</li>
                  <li>• Magnets <strong>attract</strong> metal objects.</li>
                  <li>• The new restaurant <strong>attracts</strong> many customers.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Atract (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Atract&quot; is a misspelling of &quot;attract&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Atract&quot; is not used in standard English.</li>
                  <li>• Always use <strong>attract</strong> when referring to drawing or pulling.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Attract:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Draw</li>
                <li>• Pull</li>
                <li>• Lure</li>
                <li>• Entice</li>
                <li>• Magnetize</li>
                <li>• Appeal to</li>
                <li>• Fascinate</li>
                <li>• Charm</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Atract:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Attract</strong> is spelled with two &quot;t&quot;s, not one.</li>
          <li>• The word comes from Latin &quot;attrahere&quot; meaning to draw toward.</li>
          <li>• Can be used both literally (magnets attract metal) and figuratively (attract attention).</li>
          <li>• Common in physics, psychology, and everyday language.</li>
          <li>• &quot;Atract&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;atract&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;atract&quot; is never correct. The proper spelling is always &quot;attract&quot; with two &quot;t&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;at-tract&quot; - the prefix &quot;at&quot; plus the word &quot;tract&quot; meaning to pull or draw.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between attract and attract?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: There is no difference - &quot;attract&quot; is the only correct spelling. &quot;Atract&quot; is simply a misspelling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can attract be used in scientific contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;attract&quot; is commonly used in physics, chemistry, and other sciences to describe forces that draw objects together.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;atract&quot; likely occurs because of pronunciation or confusion about the double &quot;t&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;attract&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: attract attention, attract customers, attract investment, and attract interest.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is attract always about physical pulling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;attract&quot; can refer to both physical forces (like magnetism) and abstract concepts (like attracting attention or interest).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the opposite of attract?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The opposite of &quot;attract&quot; is &quot;repel&quot; - to push away or drive back.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Attract</strong> is the correct spelling with two &quot;t&quot;s. It means to draw or pull toward oneself. The misspelling &quot;atract&quot; is never correct. Use &quot;attract&quot; to describe drawing attention, interest, or physical objects together.        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 