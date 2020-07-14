exports.linkResolver = function linkResolver(doc) {
   // Route for blog posts
   if (doc.type === 'post') {
      return '/article/' + doc.uid
   }

   // URL for a case study type
   if (doc.type === 'case_study') {
      return '/projets/' + doc.uid
   }

   // Homepage route fallback
   return "/"
 }