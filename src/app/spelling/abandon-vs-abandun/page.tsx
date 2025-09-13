import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Abandon vs Abandun - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "abandon" and "abandun". Discover definitions, examples, and usage tips to avoid this common spelling mistake.',
  keywords: 'abandon vs abandun, spelling, correct spelling, abandon, abandun, word comparison',
  openGraph: {
    title: 'Abandon vs Abandun - Which is Correct?',
    description: 'Learn the correct spelling between "abandon" and "abandun". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function AbandonVsAbandunPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Abandon vs Abandun</h1>
      
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-center">
          Learn the difference between these commonly confused spellings and when to use each one.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-green-200 bg-green-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-green-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-green-800">Correct: Abandon</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              The correct spelling is <strong>abandon</strong>. This is the standard English spelling used in all contexts.
            </p>
          </div>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <XCircle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-red-800">Incorrect: Abandun</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              <strong>Abandun</strong> is a misspelling. The correct spelling is &quot;abandon&quot; with an &quot;o&quot;.
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Definition of Abandon</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl mb-4">
            <strong>Abandon</strong> (verb): To give up completely; to leave permanently; to desert or forsake.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <strong>Abandon</strong> (noun): Complete lack of inhibition or restraint; freedom from conventional constraints.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Examples of Correct Usage</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;They had to <em>abandon</em> their car in the snowstorm.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The building was <em>abandoned</em> for years before being renovated.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;She danced with wild <em>abandon</em> at the party.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Synonyms for Abandon</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-lg mb-2">As a verb:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Desert</li>
                <li>• Forsake</li>
                <li>• Leave</li>
                <li>• Relinquish</li>
                <li>• Surrender</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">As a noun:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Freedom</li>
                <li>• Spontaneity</li>
                <li>• Unrestraint</li>
                <li>• Wildness</li>
                <li>• Impulsiveness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Common Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="text-lg md:text-xl space-y-3">
            <li>• <strong>Abandon</strong> is commonly used in both formal and informal contexts</li>
            <li>• The word can be used as both a verb and a noun</li>
            <li>• Common phrases include &quot;abandon ship,&quot; &quot;abandon hope,&quot; and &quot;with abandon&quot;</li>
            <li>• The past tense is &quot;abandoned&quot; and the present participle is &quot;abandoning&quot;</li>
            <li>• Remember: there&apos;s no &quot;u&quot; in &quot;abandon&quot; - it ends with &quot;on&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Why do people misspell &quot;abandon&quot; as &quot;abandun&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: This misspelling likely occurs due to phonetic confusion. The &quot;o&quot; sound in &quot;abandon&quot; might be heard as a &quot;u&quot; sound, leading to the incorrect spelling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Is &quot;abandun&quot; ever correct?</h4>
            <p className="text-lg md:text-xl">
              A: No, &quot;abandun&quot; is never correct in English. It&apos;s always a misspelling of &quot;abandon.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: How can I remember the correct spelling?</h4>
            <p className="text-lg md:text-xl">
              A: Think of the word &quot;band&quot; in the middle of &quot;abandon&quot; - it ends with &quot;on&quot;, not &quot;un&quot;. You can also remember that &quot;abandon&quot; has the same ending as &quot;canon&quot; and &quot;cannon.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg md:text-xl">
          The correct spelling is <strong>abandon</strong>. <strong>Abandun</strong> is always incorrect. 
          Remember that &quot;abandon&quot; ends with &quot;on&quot; and contains the word &quot;band&quot; in the middle. 
          This word can be used as both a verb (meaning to leave or give up) and a noun (meaning freedom or lack of restraint).
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 