import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Category or Catagory - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;category&quot; and &quot;catagory&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CategoryVsCatagoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Category or Catagory</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;category&quot; and &quot;catagory&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Catagory</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Catagory&quot; is a common misspelling. The correct spelling is &quot;category&quot; with an &quot;e&quot; after the &quot;g&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Category</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Category&quot; is the correct spelling. It refers to a class or division of people or things regarded as having particular shared characteristics.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Category (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A class or division of people or things regarded as having particular shared characteristics.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The books are arranged by <strong>category</strong>.</li>
                  <li>• Please select the correct <strong>category</strong> for your question.</li>
                  <li>• There is a new <strong>category</strong> for science fiction novels.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Catagory (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Catagory&quot; is a misspelling of &quot;category&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Catagory&quot; is not used in standard English.</li>
                  <li>• Always use <strong>category</strong> when referring to a class or division.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Category:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Class</li>
                <li>• Group</li>
                <li>• Type</li>
                <li>• Division</li>
                <li>• Section</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Catagory:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Category</strong> is always spelled with an &quot;e&quot; after the &quot;g&quot;.</li>
            <li>• The word comes from the Greek &quot;kategoria&quot; meaning &quot;accusation, predicate, category&quot;.</li>
            <li>• &quot;Catagory&quot; is a common error due to the way the word sounds when spoken.</li>
            <li>• Always double-check spelling in formal writing.</li>
            <li>• Use &quot;category&quot; for all academic, professional, and everyday contexts.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;catagory&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;catagory&quot; is never correct. The proper spelling is always &quot;category&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember there is an &quot;e&quot; after the &quot;g&quot; in &quot;category&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;category&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Category&quot; means a class or division of people or things regarded as having particular shared characteristics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;category&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;category&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Category</strong> is the correct spelling with &quot;e&quot; in the middle. It means a class or group of things. The misspelling &quot;catagory&quot; with &quot;a&quot; is never correct. Always use &quot;category&quot; when organizing or classifying items.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 