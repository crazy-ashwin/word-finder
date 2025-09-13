import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Author vs Autor - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "author" and "autor". Discover definitions, examples, and usage tips to avoid common spelling mistakes.',
  keywords: 'author, autor, spelling, correct spelling, grammar, word comparison',
}

export default function AuthorVsAutorPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Author or Autor</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Understanding the Correct Spelling
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          The correct spelling is <strong>author</strong>. &quot;Autor&quot; is a common misspelling that should be avoided in formal writing and communication.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
            ❌ Autor
          </h3>
          <p className="text-lg md:text-xl text-red-800">
            This is an incorrect spelling. &quot;Autor&quot; is not a valid word in the English language and should never be used.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
            ✅ Author
          </h3>
          <p className="text-lg md:text-xl text-green-800">
            This is the correct spelling. &quot;Author&quot; is a valid English word meaning a writer of a book, article, or other written work.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p>
            <strong>Author</strong> (noun): A person who writes a book, article, or other written work.
          </p>
          <p>
            <strong>Author</strong> can also refer to someone who creates or originates something, such as a plan, idea, or work of art.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Examples</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <p><strong>Correct:</strong> &quot;The author of this book is very talented.&quot;</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p><strong>Correct:</strong> &quot;She is the author of several bestselling novels.&quot;</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p><strong>Correct:</strong> &quot;The author&apos;s name appears on the cover.&quot;</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p><strong>Incorrect:</strong> &quot;The autor of this book is very talented.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <h3 className="font-semibold mb-2">Writers:</h3>
            <ul className="space-y-1">
              <li>• Writer</li>
              <li>• Novelist</li>
              <li>• Wordsmith</li>
              <li>• Scribe</li>
              <li>• Penman</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Creators:</h3>
            <ul className="space-y-1">
              <li>• Creator</li>
              <li>• Originator</li>
              <li>• Initiator</li>
              <li>• Founder</li>
              <li>• Designer</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• Always use &quot;author&quot; with &quot;th&quot; in the middle, not just &quot;t&quot;</li>
          <li>• The word comes from the Latin &quot;auctor&quot; meaning originator</li>
          <li>• &quot;Autor&quot; is a phonetic misspelling that should be avoided</li>
          <li>• Remember: &quot;author&quot; has the same &quot;th&quot; as in &quot;authority&quot;</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;author&quot; as &quot;autor&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              This misspelling occurs because people often drop the &quot;h&quot; when writing the word, but the correct spelling requires the complete &quot;th&quot; sound.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is &quot;autor&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;autor&quot; is never correct in any context. It is always a spelling error.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Think of the word &quot;authority&quot; - both &quot;author&quot; and &quot;authority&quot; have &quot;th&quot; in them. This can help you remember the correct spelling.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">What are common phrases using &quot;author&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Common phrases include: &quot;author of,&quot; &quot;co-author,&quot; &quot;ghost author,&quot; and &quot;author&apos;s note.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Author</strong> is the correct spelling, while <strong>autor</strong> is always incorrect. The word &quot;author&quot; means a writer of a book, article, or other written work and should always be spelled with &quot;th&quot; in the middle. Remember that &quot;author&quot; has the same &quot;th&quot; as in &quot;authority&quot; to help with spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 