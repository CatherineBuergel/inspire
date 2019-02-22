export default class Quote {
  constructor(data) {
    this.id = data.id || data.quote.id
    this.body = data.body || data.quote.body
    this.author = data.author || data.quote.author
  }

  getTemplate() {
    return `<p data-toggle="tooltip" data-placement="bottom" title="${this.author}">${this.body}</p>`
  }

}



// {
//   "qotd_date": "2019-02-23T00:00:00.000+00:00",
//     "quote": {
//     "id": 61193,
//       "dialogue": false,
//         "private": false,
//           "tags": [],
//             "url": "https://favqs.com/quotes/lee-iacocca/61193-motivation-is-",
//               "favorites_count": 0,
//                 "upvotes_count": 1,
//                   "downvotes_count": 0,
//                     "author": "Lee Iacocca",
//                       "author_permalink": "lee-iacocca",
//                         "body": "Motivation is everything. You can do the work of two people, but you can't be two people. Instead, you have to inspire the next guy down the line and get him to inspire his people."
//   }
// }