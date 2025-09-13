import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accommodation vs Accomodation - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "accommodation" and "accomodation". Discover the proper spelling, definitions, examples, and common usage tips.',
  keywords: 'accommodation, accomodation, spelling, correct spelling, word comparison, English spelling',
  openGraph: {
    title: 'Accommodation vs Accomodation - Which is Correct?',
    description: 'Learn the correct spelling between "accommodation" and "accomodation". Discover the proper spelling, definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function AccommodationVsAccomodationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Accommodation vs Accomodation</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of this commonly misspelled word and how to use it properly in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Correct: Accommodation
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            <strong>Definition:</strong> A place to live, work, or stay; the act of accommodating or adapting to someone&apos;s needs.
          </p>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Pronunciation:</strong> /əˌkɒməˈdeɪʃən/ (uh-kom-uh-DAY-shun)
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Incorrect: Accomodation
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            <strong>Why it&apos;s wrong:</strong> Missing the second &quot;c&quot; in the spelling.
          </p>
          <p className="text-lg md:text-xl text-red-800">
            <strong>Common mistake:</strong> People often forget the double &quot;c&quot; in accommodation.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition &amp; Meaning</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Accommodation</strong> refers to a place where someone can live, work, or stay temporarily. It can also mean the process of adapting or adjusting to meet someone&apos;s needs or requirements.
          </p>
          <p>
            The word comes from the Latin &quot;accommodatio,&quot; and like its verb form &quot;accommodate,&quot; it requires the double &quot;c&quot; for correct spelling.
          </p>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Examples in Sentences</h2>
        <div className="text-lg md:text-xl text-purple-800 space-y-4">
          <p><strong>Correct usage:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The hotel provides excellent <strong>accommodation</strong> for business travelers.</li>
            <li>We need to find suitable <strong>accommodation</strong> for the conference attendees.</li>
            <li>The university offers student <strong>accommodation</strong> on campus.</li>
            <li>Please make <strong>accommodation</strong> for guests with disabilities.</li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-indigo-800">
          <div>
            <h3 className="font-semibold mb-2">For &quot;place to stay&quot;:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Lodging</li>
              <li>Housing</li>
              <li>Residence</li>
              <li>Quarters</li>
              <li>Shelter</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">For &quot;adaptation&quot;:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Adjustment</li>
              <li>Adaptation</li>
              <li>Modification</li>
              <li>Concession</li>
              <li>Compromise</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>Remember the double &quot;c&quot; in accommodation - think of it as &quot;ac-COM-modation&quot;</li>
          <li>The word follows the same spelling pattern as &quot;accommodate&quot;</li>
          <li>Common misspellings include: accomodation, acomodation, accommadation</li>
          <li>This is one of the most commonly misspelled words in English</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Why do people misspell &quot;accommodation&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">The double &quot;c&quot; is unusual in English, and many people assume it should be spelled with a single &quot;c&quot; like many other words.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Is &quot;accomodation&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;accomodation&quot; is always incorrect. The proper spelling always includes the double &quot;c.&quot;</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Think of the phrase &quot;ac-COM-modation&quot; or remember that it has two &quot;c&quot;s and two &quot;m&quot;s.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-3">
          <p>
            <strong>Accommodation</strong> is the correct spelling, featuring a double &quot;c&quot; that is essential to the word&apos;s proper form. This word refers to a place to stay or the act of adapting to needs.
          </p>
          <p>
            The misspelling <strong>accomodation</strong> (with a single &quot;c&quot;) is incorrect and should be avoided in all formal writing contexts.
          </p>
          <p>
            Remember: Accommodation has two &quot;c&quot;s and two &quot;m&quot;s - this mnemonic can help you spell it correctly every time.
          </p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 