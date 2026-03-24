var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-matter",
  "level": "1",
  "url": "front-matter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "Mehdi Ahmadi    This document is a template for those who are new to PreTeXt.   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "Infinite Series",
  "body": " Infinite Series   This section is about infinite series. We will mainly focus on presenting the definitions and providing some examples such as the geometric series.     A sequence is a list of numbers indexed by the natural numbers.     Partial Sums    The sum of the first terms in a sequence is denoted by and it is known as a partial sum.      Find the sum of the geometric series    Since this is a geometric series with first term and ratio , the sum is:      Visual Example of a Geometric Series    The sum of areas of the rectangles represents the partial sum of the geometric series.      "
},
{
  "id": "def-sequence",
  "level": "2",
  "url": "section-1.html#def-sequence",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": "  A sequence is a list of numbers indexed by the natural numbers.   "
},
{
  "id": "def-partial-sum",
  "level": "2",
  "url": "section-1.html#def-partial-sum",
  "type": "Definition",
  "number": "1.2",
  "title": "",
  "body": "  The sum of the first terms in a sequence is denoted by and it is known as a partial sum.   "
},
{
  "id": "example-geometric-series",
  "level": "2",
  "url": "section-1.html#example-geometric-series",
  "type": "Example",
  "number": "1.3",
  "title": "",
  "body": "  Find the sum of the geometric series    Since this is a geometric series with first term and ratio , the sum is:    "
},
{
  "id": "subsection-1-4",
  "level": "2",
  "url": "section-1.html#subsection-1-4",
  "type": "Figure",
  "number": "1.4",
  "title": "",
  "body": " Visual Example of a Geometric Series    The sum of areas of the rectangles represents the partial sum of the geometric series.    "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "2",
  "title": "Including Interactive Graphics",
  "body": " Including Interactive Graphics  In this section, we will see an example of a graph created using GeoGebra.    Use the slider to observe that when , the vector becomes parallel to the tangent line.      The answer is                Compute  The sum is .                     The derivative is \\deriv{y}{x} .      "
},
{
  "id": "section-2-3",
  "level": "2",
  "url": "section-2.html#section-2-3",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": "  Use the slider to observe that when , the vector becomes parallel to the tangent line.  "
},
{
  "id": "mylabel",
  "level": "2",
  "url": "section-2.html#mylabel",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "",
  "body": "   The answer is            "
},
{
  "id": "mylabel3",
  "level": "2",
  "url": "section-2.html#mylabel3",
  "type": "Checkpoint",
  "number": "2.3",
  "title": "",
  "body": "   Compute  The sum is .              "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
