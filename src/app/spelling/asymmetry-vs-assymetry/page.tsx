import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Asymmetry vs Assymetry - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "asymmetry" and "assymetry". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AsymmetryVsAssymetryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Asymmetry vs Assymetry</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">assymetry</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">asymmetry</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling with single &quot;s.&quot;</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Asymmetry (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              The absence of symmetry; lack of balance or proportion between parts. It refers to a state where 
              two sides or parts are not equal, balanced, or identical to each other.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>The <strong>asymmetry</strong> of the building&apos;s design made it unique and interesting.</li>
              <li>Facial <strong>asymmetry</strong> is common and usually not noticeable.</li>
              <li>The <strong>asymmetry</strong> in the data distribution required special statistical analysis.</li>
              <li>Artists often use <strong>asymmetry</strong> to create dynamic compositions.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;asymmetry&quot; and &quot;assymetry&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Typographical errors:</strong> Adding an extra &quot;s&quot; when typing quickly</li>
            <li><strong>Phonetic similarity:</strong> Both spellings might sound similar when pronounced</li>
            <li><strong>Similar word patterns:</strong> Some words do have double &quot;s&quot; after &quot;a&quot;</li>
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
            <strong>Word origin:</strong> The word &quot;asymmetry&quot; comes from the Greek &quot;a-&quot; (not) + &quot;symmetria&quot; 
            (symmetry), meaning &quot;not symmetrical.&quot;
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Spelling pattern:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Single &quot;a&quot; at the beginning</li>
              <li>Single &quot;s&quot; after &quot;a&quot;</li>
              <li>&quot;ym&quot; combination</li>
              <li>&quot;metry&quot; ending (from Greek &quot;metron&quot; meaning measure)</li>
              <li>No double consonants</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Memory tip:</strong> Think of &quot;asymmetry&quot; as &quot;a + symmetry&quot; - literally meaning 
            &quot;not symmetry.&quot; Since &quot;symmetry&quot; has only one &quot;s,&quot; so does &quot;asymmetry.&quot;
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Asymmetry&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>imbalance</li>
              <li>irregularity</li>
              <li>unevenness</li>
              <li>disproportion</li>
              <li>lopsidedness</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Contextual:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>unbalance</li>
              <li>inequality</li>
              <li>disparity</li>
              <li>skewness</li>
              <li>distortion</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Usage Tips */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Tips</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When to use &quot;asymmetry&quot;:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>When describing lack of balance or proportion</li>
              <li>In scientific or mathematical contexts</li>
              <li>When discussing design or artistic composition</li>
              <li>In medical contexts about body features</li>
              <li>When referring to statistical distributions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Common contexts:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Mathematics and statistics</li>
              <li>Art and design</li>
              <li>Biology and medicine</li>
              <li>Architecture and engineering</li>
              <li>Physics and chemistry</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;assymetry&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;assymetry&quot; is never correct in standard English. It is always a spelling error for &quot;asymmetry.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the pronunciation of &quot;asymmetry&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: It is pronounced as /eɪˈsɪmətri/ with the stress on the second syllable. The &quot;s&quot; is pronounced as a single &quot;s&quot; sound.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Are there related words with similar spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;symmetry&quot; (the opposite), &quot;asymmetric&quot; (adjective), and &quot;asymmetrical&quot; 
              all have the same single &quot;s&quot; pattern.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;asymmetry&quot; comes from &quot;a + symmetry,&quot; so it has only one &quot;s&quot; 
              just like the word &quot;symmetry.&quot; Think: a + symmetry = asymmetry.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a relatively common spelling error, especially since it&apos;s not a frequently used word 
              and the single vs double &quot;s&quot; distinction can be confusing.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Asymmetry</strong> is the correct spelling with single &quot;s&quot;: a-sym-me-try. It means lack of symmetry or balance. The misspelling &quot;assymetry&quot; is never correct. Always use &quot;asymmetry&quot; when referring to lack of balance or proportion.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 