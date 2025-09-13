import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Affect or Effect - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;affect&quot; and &quot;effect&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AffectVsEffectPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Affect or Effect
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Affect or Effect these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Affect</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Affect&quot; is the correct spelling for the verb form. It means to influence or have an impact on.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Effect</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Effect&quot; is the correct spelling for the noun form. It means a result or consequence.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Affect (Verb)</h3>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
              <strong>Affect</strong> (verb): To have an influence on or cause a change in someone or something; to produce an effect on; to impact or modify.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• The weather will <strong>affect</strong> our plans.</li>
                <li>• Her words <strong>affected</strong> me deeply.</li>
                <li>• The disease <strong>affects</strong> the nervous system.</li>
                <li>• Music can <strong>affect</strong> your mood.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Effect (Noun)</h3>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
              <strong>Effect</strong> (noun): A change that results when something is done or happens; a result or consequence; an impression or impact.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• The <strong>effect</strong> of the medicine was immediate.</li>
                <li>• The new policy had a positive <strong>effect</strong>.</li>
                <li>• The special <strong>effects</strong> in the movie were amazing.</li>
                <li>• What was the <strong>effect</strong> of the decision?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Affect (Verb)</h3>
            <ul className="text-lg md:text-xl text-blue-800 space-y-1">
              <li>• Influence</li>
              <li>• Impact</li>
              <li>• Change</li>
              <li>• Modify</li>
              <li>• Alter</li>
              <li>• Transform</li>
              <li>• Shape</li>
              <li>• Determine</li>
            </ul>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Effect (Noun)</h3>
            <ul className="text-lg md:text-xl text-blue-800 space-y-1">
              <li>• Result</li>
              <li>• Consequence</li>
              <li>• Outcome</li>
              <li>• Impact</li>
              <li>• Influence</li>
              <li>• Impression</li>
              <li>• Reaction</li>
              <li>• Response</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Affect</strong> (verb) starts with &apos;a&apos; and refers to the action of influencing.</li>
            <li>• <strong>Effect</strong> (noun) starts with &apos;e&apos; and refers to the result or consequence.</li>
            <li>• Think: &quot;A for Action&quot; (affect) or &quot;E for End result&quot; (effect).</li>
            <li>• Both words are commonly used in formal and informal contexts.</li>
            <li>• The words come from the Latin &quot;affectus&quot; and &quot;effectus.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: When do I use &quot;affect&quot; or &quot;effect&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Use &quot;affect&quot; (verb) when referring to the action of influencing: &quot;The rain will affect the game.&quot; Use &quot;effect&quot; (noun) when referring to the result: &quot;The effect of the rain was a cancelled game.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the difference?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think: &quot;A for Action&quot; (affect is a verb) and &quot;E for End result&quot; (effect is a noun). Or remember: &quot;Affect is the Action, Effect is the End result.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;affect&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, but rarely. &quot;Affect&quot; can be a noun in psychology meaning &quot;emotion or feeling,&quot; but this usage is uncommon in everyday language. Stick to the verb form for clarity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;effect&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, but rarely. &quot;Effect&quot; can be a verb meaning &quot;to bring about&quot; or &quot;to accomplish,&quot; but this usage is formal and uncommon. Stick to the noun form for clarity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;affect&quot; and &quot;influence&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Affect&quot; suggests a direct impact or change, while &quot;influence&quot; suggests a more subtle or indirect effect. &quot;Affect&quot; is more immediate, &quot;influence&quot; is more gradual.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often confuse these words?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: People confuse them because they sound very similar and have related meanings. The spelling difference (&apos;a&apos; or &apos;e&apos;) is subtle and easy to miss, especially when typing quickly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using these words?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: affect change, affect behavior, affect performance, side effect, special effects, take effect, in effect, and cause and effect.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can these words be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, both words are appropriate in formal writing. They are standard English words that can be used in academic, business, scientific, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Affect</strong> is usually a verb meaning to influence, while <strong>Effect</strong> is usually a noun meaning a result. The key difference is: Affect = Action (verb), Effect = End result (noun). Always use the correct spelling based on whether you need a verb or noun.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 