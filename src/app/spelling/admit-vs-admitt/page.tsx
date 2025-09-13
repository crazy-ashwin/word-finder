import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Admit or Admitt - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;admit&quot; and &quot;admitt&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdmitVsAdmittPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Admit or Admitt
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Admit or Admitt these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Admitt</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Admitt&quot; is a misspelling. The correct spelling has only one &apos;t&apos; at the end.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Admit</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Admit&quot; is the correct spelling. It means to confess or allow entry.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Admit</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Admit</strong> (verb): To confess or acknowledge something to be true; to allow someone to enter a place; to accept someone into an institution or organization; to concede or recognize a fact or truth.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• I must <strong>admit</strong> that I made a mistake.</li>
              <li>• The hospital will <strong>admit</strong> the patient tomorrow.</li>
              <li>• She was <strong>admitted</strong> to the prestigious university.</li>
              <li>• He finally <strong>admitted</strong> to being wrong.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Admit</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Confess</li>
                <li>• Acknowledge</li>
                <li>• Concede</li>
                <li>• Allow</li>
                <li>• Accept</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Grant</li>
                <li>• Permit</li>
                <li>• Recognize</li>
                <li>• Agree</li>
                <li>• Let in</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Admit</strong> is spelled with one &apos;t&apos; at the end, not two.</li>
            <li>• It&apos;s commonly used in both formal and informal contexts.</li>
            <li>• Often used with &quot;to&quot; (admit to something).</li>
            <li>• Can be used in medical, educational, and everyday contexts.</li>
            <li>• The word comes from the Latin &quot;admittere&quot; meaning &quot;to let in.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;admitt&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;admitt&quot; is never correct. The proper spelling is always &quot;admit&quot; with one &apos;t&apos; at the end.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;admit&quot; as being related to &quot;admission&quot; - both have one &apos;t&apos; and relate to allowing entry or acknowledging truth. The word means to let in or confess, so it follows the same pattern.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;admit&quot; and &quot;confess&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Admit&quot; is more general and can mean acknowledging any truth or allowing entry, while &quot;confess&quot; specifically refers to admitting guilt or wrongdoing. &quot;Admit&quot; is broader in scope, while &quot;confess&quot; is more specific.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;admit&quot; be used in medical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Admit&quot; is commonly used in medical contexts to describe allowing a patient into a hospital. For example: &quot;The doctor admitted the patient to the emergency room&quot; or &quot;She was admitted for surgery.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;admit&quot; related to &quot;admission&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Admit&quot; is the verb form, while &quot;admission&quot; is the noun form. Both words share the same root and correct spelling pattern with one &apos;t&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;admitt&quot; likely occurs because people may think it follows the pattern of other words with double consonants at the end. They might confuse it with words that have double &apos;t&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;admit&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: admit to, admit defeat, admit guilt, admit a mistake, admit to hospital, and admit to college. The word is often used in contexts involving acknowledgment or entry.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;admit&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;admit&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts to describe acknowledgment or permission.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Admit</strong> is the correct spelling with one &apos;t&apos; at the end. It means to confess or acknowledge something to be true, or to allow someone to enter a place. The misspelling &quot;admitt&quot; with two &apos;t&apos;s is never correct. Use this word when you want to describe acknowledging truth or allowing entry.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 