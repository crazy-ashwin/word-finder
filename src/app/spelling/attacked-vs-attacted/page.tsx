import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Attacked vs Attacted - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "attacked" and "attacted". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AttackedVsAttactedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Attacked or Attacted</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">attacted</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">attacked</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling of the past tense and past participle of &quot;attack.&quot;</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Attacked (verb)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              The past tense and past participle of &quot;attack.&quot; To have acted violently against someone or something, 
              to have criticized someone harshly, or to have begun to deal with a problem or task.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>The army <strong>attacked</strong> the enemy position at dawn.</li>
              <li>She <strong>attacked</strong> the problem with enthusiasm.</li>
              <li>The critics <strong>attacked</strong> the new movie for its poor plot.</li>
              <li>He <strong>attacked</strong> his homework immediately after school.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;attacked&quot; and &quot;attacted&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings would sound similar when pronounced</li>
            <li><strong>Common misspelling:</strong> Many people transpose the &quot;c&quot; and &quot;k&quot; when spelling the word</li>
            <li><strong>Inconsistent English spelling rules:</strong> Some words do have &quot;c&quot; before &quot;k&quot;</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
            <li><strong>Typographical errors:</strong> Transposing letters when typing quickly</li>
            <li><strong>Influence from other words:</strong> Words like &quot;contact&quot; have &quot;c&quot; before &quot;t&quot;</li>
          </ul>
        </div>
      </Card>

      {/* Grammar Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Grammar Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Spelling rule:</strong> The word &quot;attacked&quot; comes from the French word &quot;attaquer&quot; and follows 
            the standard English spelling pattern with &quot;k&quot; before &quot;ed.&quot;
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Related words:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li><strong>attack</strong> (base form)</li>
              <li><strong>attacking</strong> (present participle)</li>
              <li><strong>attacker</strong> (noun)</li>
              <li><strong>attackable</strong> (adjective)</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Note:</strong> All related words follow the same spelling pattern with &quot;k&quot; before &quot;ed.&quot;
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Attacked&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Physical:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>assaulted</li>
              <li>struck</li>
              <li>charged</li>
              <li>raided</li>
              <li>invaded</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Verbal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>criticized</li>
              <li>denounced</li>
              <li>condemned</li>
              <li>rebuked</li>
              <li>reprimanded</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;attacked&quot; as the past tense and past participle of &quot;attack&quot;</li>
            <li>Remember that &quot;attacked&quot; uses &quot;k&quot; not &quot;c&quot; before &quot;ed&quot;</li>
            <li>Common contexts include military, sports, criticism, and problem-solving</li>
            <li>The word &quot;attacked&quot; can refer to both physical and verbal actions</li>
            <li>Always spell it as &quot;attacked&quot; not &quot;attacted&quot;</li>
            <li>Think of it as &quot;attack&quot; + &quot;ed&quot; to remember the spelling</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;attacted&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;attacted&quot; is never correct in standard English. The correct spelling is always &quot;attacked.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the difference between &quot;attacked&quot; and &quot;contacted&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: &quot;Attacked&quot; means to have acted violently or critically against something, while &quot;contacted&quot; 
              means to have communicated with someone.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;attacked&quot; uses &quot;k&quot; not &quot;c&quot; before &quot;ed.&quot; Think of it as &quot;attack&quot; + &quot;ed&quot; 
              or use the mnemonic: &quot;Attacked uses &apos;k&apos; for &apos;kick&apos; and &apos;knock&apos;.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a common spelling mistake. Many people transpose the &quot;c&quot; and &quot;k&quot; when writing &quot;attacked,&quot; 
              especially when typing quickly or relying on phonetic spelling.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Can &quot;attacked&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;attacked&quot; can be used in various contexts including military, sports, criticism, 
              problem-solving, and general conflict situations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What about the base form?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: The base form is &quot;attack&quot; and it also follows the same spelling pattern with &quot;k&quot; at the end.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Attacked</strong> is the correct spelling with &quot;ck&quot; in the middle. It means to assault or criticize. The misspelling &quot;attacted&quot; with &quot;ct&quot; is never correct. Always use &quot;attacked&quot; when referring to assaults or criticisms.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 