import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Asks vs Askes - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "asks" and "askes". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AsksVsAskesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Asks or Askes</h1>
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
            <div className="text-6xl font-bold text-red-600 mb-4">askes</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">asks</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling of the third-person singular present tense of &quot;ask&quot;.</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Asks (verb)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              The third-person singular present tense form of the verb &quot;ask.&quot; It means to request information, 
              seek answers, or inquire about something.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>She <strong>asks</strong> many questions during class.</li>
              <li>He <strong>asks</strong> for help when he needs it.</li>
              <li>The teacher <strong>asks</strong> the students to be quiet.</li>
              <li>My friend <strong>asks</strong> about my day every evening.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;asks&quot; and &quot;askes&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings would sound similar when pronounced</li>
            <li><strong>Inconsistent English spelling rules:</strong> Some words do end with &quot;-es&quot; in the third-person singular</li>
            <li><strong>Overgeneralization:</strong> Applying the &quot;-es&quot; rule to all verbs</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
          </ul>
        </div>
      </Card>

      {/* Grammar Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Grammar Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Third-person singular present tense rule:</strong> For most regular verbs, we add &quot;-s&quot; to the base form 
            when the subject is third-person singular (he, she, it, or a singular noun).
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Examples:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>I ask → He/she/it <strong>asks</strong></li>
              <li>I walk → He/she/it <strong>walks</strong></li>
              <li>I talk → He/she/it <strong>talks</strong></li>
              <li>I work → He/she/it <strong>works</strong></li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Note:</strong> The verb &quot;ask&quot; follows the regular pattern and only needs &quot;-s,&quot; not &quot;-es.&quot;
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Asks&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>inquires</li>
              <li>requests</li>
              <li>seeks</li>
              <li>solicits</li>
              <li>petitions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Informal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>wonders</li>
              <li>wants to know</li>
              <li>is curious about</li>
              <li>needs to find out</li>
              <li>would like to know</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">

        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;asks&quot; when the subject is third-person singular (he, she, it, or a singular noun)</li>
            <li>Use &quot;asks&quot; in present tense sentences</li>
            <li>Use &quot;asks&quot; when describing someone making a request or inquiry</li>
            <li>Common contexts include academic writing, professional communication, everyday conversation, and formal presentations</li>
            <li>Remember that &quot;ask&quot; is a regular verb that simply adds &quot;-s&quot; for third-person singular</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;askes&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;askes&quot; is never correct in standard English. The correct third-person singular form is always &quot;asks.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What about other forms of the verb &quot;ask&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: The other forms are: ask (base form), asked (past tense), asking (present participle), and asks (third-person singular).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Are there any verbs that use &quot;-es&quot; in third-person singular?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, verbs ending in -s, -z, -x, -ch, -sh, or -o typically add &quot;-es&quot;: passes, buzzes, fixes, catches, washes, goes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;ask&quot; is a regular verb that follows the simple rule: add &quot;-s&quot; for third-person singular. 
              Think of it as &quot;ask + s = asks.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: While not extremely common, it does occur, especially among English learners or in informal writing where 
              people might not pay close attention to grammar rules.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Asks&quot;</strong> is the correct spelling for the third-person singular present tense of the verb &quot;ask.&quot; 
          The spelling &quot;askes&quot; is incorrect and should never be used. Remember that &quot;ask&quot; is a regular verb that 
          simply adds &quot;-s&quot; for third-person singular forms. This follows the standard English grammar rule for most regular verbs.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 