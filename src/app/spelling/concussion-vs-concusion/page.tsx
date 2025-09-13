import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Concussion or Concusion - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;concussion&quot; and &quot;concusion&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ConcussionVsConcusionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Concussion or Concusion</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;concussion&quot; or &quot;concusion&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Concusion</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Concusion&quot; is a common misspelling of &quot;concussion&quot;. Always use &quot;concussion&quot; when referring to a brain injury caused by a blow or jolt to the head.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Concussion</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Concussion&quot; is a noun meaning a brain injury caused by a blow or jolt to the head, often resulting in temporary loss of normal brain function.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Concussion&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Concussion&quot;</strong> (noun): A brain injury caused by a blow or jolt to the head, often resulting in temporary loss of normal brain function.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in medicine, sports, and everyday conversation to describe a type of traumatic brain injury.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Concussion&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Brain injury</li>
                <li>• Head trauma</li>
                <li>• Blow</li>
                <li>• Jolt</li>
                <li>• Shock</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Impact</li>
                <li>• Trauma</li>
                <li>• Contusion</li>
                <li>• Injury</li>
                <li>• Knock</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;He suffered a <span className="text-green-600 font-semibold">concussion</span> during the game.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;He suffered a <span className="text-red-600 font-semibold">concusion</span> during the game.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Concussions can have serious long-term effects.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Concussion&quot; is spelled with double &quot;s&quot; in the middle.</li>
          <li>• The pronunciation is /kənˈkʌʃən/ (kuhn-KUSH-un).</li>
          <li>• Commonly used in medicine, sports, and conversation.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;concusion&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;concusion&quot; is never correct. The only correct form is &quot;concussion&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;concussion&quot; has double &quot;s&quot; in the middle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the verb form of &quot;concussion&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              There is no common verb form; use &quot;to suffer a concussion&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;concussion&quot; be used in sports?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;concussion&quot; is often used in sports to describe a head injury.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;concussion&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;suffer a concussion&quot;, &quot;concussion protocol&quot;, &quot;concussion symptoms&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Concussion</strong> is the correct spelling with &quot;ss&quot; in the middle. It means a brain injury from impact. The misspelling &quot;concusion&quot; with single &quot;s&quot; is never correct. Always use &quot;concussion&quot; when referring to brain injuries.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 