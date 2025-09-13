import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Asterisk vs Asteriks - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "asterisk" and "asteriks". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AsteriskVsAsteriksPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Asterisk vs Asteriks</h1>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block">
          <p className="text-lg md:text-xl font-semibold">Which spelling is correct?</p>
        </div>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-200 bg-red-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">❌</span>
            <h2 className="text-2xl font-bold text-red-800">Incorrect</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-red-600 mb-4">asteriks</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">asterisk</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling with &quot;isk&quot; ending.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Asterisk (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A symbol (*) used in writing and printing to indicate a footnote, omission, or special reference. 
              It is also used in mathematics, computing, and other fields to denote various meanings.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>Use an <strong>asterisk</strong> (*) to mark important footnotes in your document.</li>
              <li>The <strong>asterisk</strong> indicates that additional information is available.</li>
              <li>In programming, the <strong>asterisk</strong> is used for multiplication.</li>
              <li>She marked the questionable entries with an <strong>asterisk</strong>.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;asterisk&quot; and &quot;asteriks&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic pronunciation:</strong> Both spellings might sound similar when pronounced</li>
            <li><strong>Typographical errors:</strong> Adding an &quot;s&quot; when typing quickly</li>
            <li><strong>Similar word patterns:</strong> Some words do end with &quot;ks&quot;</li>
            <li><strong>Unfamiliar word:</strong> Not commonly used in everyday conversation</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
          </ul>
        </div>
      </Card>

      {/* Etymology and Spelling Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Etymology and Spelling Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Word origin:</strong> The word &quot;asterisk&quot; comes from the Greek &quot;asteriskos,&quot; 
            meaning &quot;little star,&quot; which explains the &quot;isk&quot; ending.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Spelling pattern:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>&quot;aster&quot; (from Greek &quot;aster&quot; meaning star)</li>
              <li>&quot;isk&quot; ending (Greek diminutive suffix)</li>
              <li>No additional &quot;s&quot; at the end</li>
              <li>Maintains Greek origin spelling</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Memory tip:</strong> Think of &quot;asterisk&quot; as &quot;aster + isk&quot; - literally meaning 
            &quot;little star.&quot; The &quot;isk&quot; ending is common in Greek-derived words.
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Asterisk&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Symbols:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>star symbol</li>
              <li>reference mark</li>
              <li>footnote symbol</li>
              <li>wildcard</li>
              <li>pointer</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Contextual:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>marker</li>
              <li>indicator</li>
              <li>notation</li>
              <li>sign</li>
              <li>symbol</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Usage Tips */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Tips</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When to use &quot;asterisk&quot;:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>When referring to the * symbol in writing</li>
              <li>In academic or formal writing for footnotes</li>
              <li>In programming contexts for wildcards</li>
              <li>When discussing mathematical notation</li>
              <li>In publishing and editorial contexts</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Common contexts:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Academic writing and research</li>
              <li>Computer programming</li>
              <li>Mathematics and statistics</li>
              <li>Publishing and editing</li>
              <li>Technical documentation</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;asteriks&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;asteriks&quot; is never correct in standard English. It is always a spelling error for &quot;asterisk.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the pronunciation of &quot;asterisk&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: It is pronounced as /ˈæstərɪsk/ with the stress on the first syllable. The &quot;isk&quot; is pronounced as &quot;isk.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Are there related words with similar spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, words like &quot;asteroid,&quot; &quot;astronomy,&quot; and &quot;aster&quot; all share the Greek root 
              &quot;aster&quot; meaning star.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;asterisk&quot; comes from Greek &quot;asteriskos&quot; (little star), so it has &quot;isk&quot; 
              at the end. Think: aster + isk = asterisk (little star).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a relatively common spelling error, especially since it&apos;s not a frequently used word 
              and adding an extra &quot;s&quot; is a common typographical error.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Asterisk&quot;</strong> is the correct spelling with &quot;isk&quot; ending. The spelling &quot;asteriks&quot; 
          is incorrect and should never be used. This word comes from the Greek &quot;asteriskos&quot; (little star) and maintains 
          the &quot;isk&quot; ending. Remember that &quot;asterisk&quot; has &quot;isk&quot; because it literally means &quot;little star,&quot; 
          and it follows the Greek pattern: aster + isk = asterisk.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 