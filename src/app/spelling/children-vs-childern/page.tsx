import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Children vs Childern - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "children" and "childern". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'children vs childern, correct spelling, spelling comparison, English spelling, word confusion',
  openGraph: {
    title: 'Children vs Childern - Which is Correct?',
    description: 'Learn the correct spelling between "children" and "childern". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ChildrenVsChildernPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
        Children or Childern
      </h1>
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;Children&quot; or &quot;Childern&quot;, this plural noun and common misspellings.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg border-l-4 border-red-500 p-6">
          <h3 className="text-2xl font-bold text-red-900 flex items-center">
            ❌ Incorrect: Childern
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            <strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;children.&quot; The correct spelling places the &quot;l&quot; before the &quot;d&quot;.
          </p>
          <p className="text-lg md:text-xl text-red-800">
            <strong>Common Error:</strong> Swapping the order of &quot;l&quot; and &quot;d&quot; in the word
          </p>
        </div>
        <div className="bg-green-50 rounded-lg border-l-4 border-green-500 p-6">
          <h3 className="text-2xl font-bold text-green-900 flex items-center">
            ✅ Correct: Children
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            <strong>Definition:</strong> Plural of child; young human beings below the age of puberty or below the legal age of majority.
          </p>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Part of Speech:</strong> Noun (plural)
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          Synonyms for Children
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Kids</h3>
            <p className="text-lg text-blue-700">Informal term for children</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Minors</h3>
            <p className="text-lg text-blue-700">People under the age of legal adulthood</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Youth</h3>
            <p className="text-lg text-blue-700">Young people collectively</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Juveniles</h3>
            <p className="text-lg text-blue-700">Young persons; not yet adults</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">children</span> played in the park.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800">
              <strong>Incorrect:</strong> &quot;The <span className="text-red-600 font-semibold">childern</span> played in the park.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Correct:</strong> &quot;All the <span className="text-green-600 font-semibold">children</span> received gifts.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&bull; &quot;Children&quot; is pronounced as /ˈtʃɪldrən/</li>
          <li>&bull; The word comes from Old English &quot;cildru&quot; (plural of &quot;cild&quot;)</li>
          <li>&bull; &quot;Children&quot; is always plural; the singular is &quot;child&quot;</li>
          <li>&bull; Remember: The &quot;l&quot; comes before the &quot;d&quot; in &quot;children&quot;</li>
          <li>&bull; Commonly confused in fast writing or typing</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">
              Q: Why do people misspell &quot;children&quot; as &quot;childern&quot;?
            </h3>
            <p className="text-lg text-blue-800">
              A: This misspelling often occurs because the order of &quot;l&quot; and &quot;d&quot; is swapped, which can happen in fast writing or due to unfamiliarity with the correct spelling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">
              Q: What is the origin of the word &quot;children&quot;?
            </h3>
            <p className="text-lg text-blue-800">
              A: The word &quot;children&quot; comes from Old English &quot;cildru,&quot; the plural of &quot;cild&quot; (child). Over time, the spelling and pronunciation evolved to the modern form.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">
              Q: Is &quot;children&quot; ever singular?
            </h3>
            <p className="text-lg text-blue-800">
              A: No, &quot;children&quot; is always plural. The singular form is &quot;child.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg border-l-4 border-green-500 p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Children</strong> is the correct spelling. It is the plural form of &quot;child&quot; and refers to young human beings. &quot;Childern&quot; is a misspelling that swaps the order of &quot;l&quot; and &quot;d&quot; and should be avoided.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  );
}