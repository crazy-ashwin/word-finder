import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Unstable or Instable - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;unstable&quot; and &quot;instable&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function UnstableVsInstablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Unstable or Instable</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;unstable&quot; and &quot;instable&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Instable</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Instable&quot; is rarely used in modern English. The correct spelling is &quot;unstable&quot; for most contexts.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Unstable</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Unstable&quot; is the correct spelling. It means not stable, prone to change, or likely to give way.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Unstable (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Likely to change or fail; not firmly fixed.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The ladder was <strong>unstable</strong> and wobbled dangerously.</li>
                  <li>• The political situation is <strong>unstable</strong>.</li>
                  <li>• The patient&apos;s condition remained <strong>unstable</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Instable (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Instable&quot; is an archaic or rare variant of &quot;unstable&quot; and is not commonly used in modern English.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Instable&quot; is rarely used in contemporary writing.</li>
                  <li>• Always use <strong>unstable</strong> for clarity and correctness.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Unstable:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Precarious</li>
                <li>• Unsteady</li>
                <li>• Insecure</li>
                <li>• Shaky</li>
                <li>• Volatile</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Instable:</h4>
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
            <li>• <strong>Unstable</strong> is the standard spelling in modern English.</li>
            <li>• Use <strong>unstable</strong> to describe things that are not steady or secure.</li>
            <li>• &quot;Instable&quot; is considered archaic or rare.</li>
            <li>• &quot;Instable&quot; is never correct in contemporary writing.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;instable&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Instable&quot; is an archaic or rare form. Use &quot;unstable&quot; in all modern writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;un-&quot; as the standard prefix for negatives in English, as in &quot;unhappy&quot; or &quot;unusual.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does unstable mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means not stable, likely to change, or prone to fail.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can unstable be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;unstable&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Unstable</strong> is the correct spelling for describing things that are not steady or secure. &quot;Instable&quot; is rarely used and is not recommended in modern English. Use &quot;unstable&quot; for clarity and correctness.</p>
      </div>
    </div>
  )
} 