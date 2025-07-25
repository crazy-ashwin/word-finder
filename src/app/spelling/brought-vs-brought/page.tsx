import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brought or Brought - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brought&quot; and &quot;brought&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'brought, brought, spelling, correct spelling, word comparison, English spelling, past tense, irregular verb',
  openGraph: {
    title: 'Brought or Brought - Which is Correct?',
    description: 'Learn the correct spelling between &quot;brought&quot; and &quot;brought&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BroughtVsBroughtPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Brought or Brought</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot;Brought&quot; and &quot;Brought&quot;. This is the past tense and past participle form of the verb &quot;bring.&quot;
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Brought (Incorrect Usage)
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong> when used in the wrong context. &quot;Brought&quot; is the past tense of &quot;bring.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I will brought the book tomorrow</li>
              <li>• She broughts the food every day</li>
              <li>• They are broughting the supplies</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Brought (Correct Usage)
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling when used properly. &quot;Brought&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• I brought the book yesterday</li>
              <li>• She brought the food last week</li>
              <li>• They brought the supplies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Brought</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Brought</strong> (verb): Past tense and past participle of &quot;bring&quot; - to carry, convey, or take something or someone to a place.
          </p>
          <p>
            <strong>Brought</strong> (verb): To cause something to happen or exist; to produce or result in.
          </p>
          <p>
            <strong>Brought</strong> (verb): To cause someone to come to a particular state or condition.
          </p>
          <p>
            Used to indicate that someone or something was carried, conveyed, or taken to a place in the past.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Brought</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Carried</li>
              <li>• Conveyed</li>
              <li>• Delivered</li>
              <li>• Transported</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Fetched</li>
              <li>• Retrieved</li>
              <li>• Escorted</li>
              <li>• Accompanied</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Brought&quot; is the irregular past tense and past participle of &quot;bring&quot;</li>
          <li>• The word comes from Old English &quot;brōhte&quot; (past tense of &quot;bringan&quot;)</li>
          <li>• The pronunciation is /brɔːt/ (brawt)</li>
          <li>• &quot;Brought&quot; is used for both past tense and past participle</li>
          <li>• &quot;Bring&quot; is an irregular verb: bring → brought → brought</li>
          <li>• This follows the same pattern as other irregular verbs like &quot;think&quot; → &quot;thought&quot;</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: When should I use &quot;brought&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Use &quot;brought&quot; for past tense and past participle forms of &quot;bring.&quot; For example: &quot;I brought the book&quot; (past tense) or &quot;I have brought the book&quot; (past participle).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;bring&quot; and &quot;brought&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bring&quot; is the base form (present tense), while &quot;brought&quot; is the past tense and past participle form of the same verb.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Can I use &quot;brought&quot; in the future tense?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;brought&quot; is only for past tense and past participle. For future tense, use &quot;will bring&quot; or &quot;going to bring.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct usage?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember that &quot;brought&quot; is for past actions only. Think: &quot;I bring&quot; (present), &quot;I brought&quot; (past), &quot;I have brought&quot; (past participle).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Brought</strong> is the correct spelling of this word when used in the proper context (past tense and past participle).
          </p>
          <p>
            Remember: Bring is an irregular verb (bring → brought → brought). Use &quot;brought&quot; only for past actions, not for present or future tense.
          </p>
        </div>
      </div>
    </div>
  )
} 