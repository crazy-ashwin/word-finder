import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Allusion or Alusion - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;allusion&quot; and &quot;alusion&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AllusionVsAlusionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Allusion or Alusion</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;allusion&quot; and &quot;alusion&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alusion</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alusion&quot; is a misspelling. The correct spelling is &quot;allusion&quot; with two &quot;l&quot;s at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Allusion</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Allusion&quot; is the correct spelling. It means an indirect reference or hint.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Allusion (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An indirect reference or hint to something, often to a literary work, historical event, or person.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The poem contains an <strong>allusion</strong> to Shakespeare.</li>
                  <li>• His speech made an <strong>allusion</strong> to the Great Depression.</li>
                  <li>• The novel is full of biblical <strong>allusions</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alusion (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alusion&quot; is a misspelling of &quot;allusion&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alusion&quot; is not used in standard English.</li>
                  <li>• Always use <strong>allusion</strong> when referring to indirect references.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Allusion:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Reference</li>
                <li>• Hint</li>
                <li>• Suggestion</li>
                <li>• Mention</li>
                <li>• Implication</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alusion:</h4>
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
            <li>• <strong>Allusion</strong> is spelled with two &quot;l&quot;s at the beginning, not one.</li>
            <li>• Used to make indirect references to other works, events, or people.</li>
            <li>• Common in literature, speeches, and academic writing.</li>
            <li>• The word comes from Latin &quot;alludere&quot; meaning &quot;to play with.&quot;</li>
            <li>• &quot;Alusion&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alusion&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alusion&quot; is never correct. The proper spelling is always &quot;allusion&quot; with two &quot;l&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;all-usion&quot; - it has two &quot;l&quot;s like the word &quot;all.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between allusion and illusion?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Allusion&quot; is an indirect reference, while &quot;illusion&quot; is a false perception or deceptive appearance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can allusion be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;allusion&quot; is commonly used in academic, literary, and formal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common types of allusions?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common types include biblical allusions, literary allusions, historical allusions, and mythological allusions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alusion&quot; occurs because people think it should have one &quot;l&quot; like many other words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is allusion always intentional?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Usually yes, but sometimes allusions can be unintentional or subconscious references.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can allusion be used in everyday speech?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, people often make allusions in casual conversation, though they may not always be recognized.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Allusion</strong> is the correct spelling with two &quot;l&quot;s at the beginning. It means an indirect reference or hint to something else. The misspelling &quot;alusion&quot; is never correct. Use &quot;allusion&quot; when making indirect references in your writing.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 