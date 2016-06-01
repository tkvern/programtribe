// Posts = new orion.collection('posts', {
//   singularName: '文章',
//   pluralName: '文章',
//   title: '文章',
//   link: {
//     title: '文章'
//   },
//   tabular: {
//     columns: [
//       { data: "title", title: "Title" },
//       orion.attributeColumn('froala', 'body', 'Content', { orderable: true }), // makes it searchable
//       orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
//       orion.attributeColumn('createdAt', 'createdAt', 'Created At')
//     ]
//   }
// });

// Posts.attachSchema(new SimpleSchema({
//   topics: orion.attribute('hasOne', {
//     label: 'Topics'
//   }, {
//   collection: Topics,
//     titleField: 'title',
//     publicationName: 'topics',
//   }),
//   title: {
//     type: String
//   },
//   body: orion.attribute('froala', {
//       label: 'Body'
//   }),
//   createdBy: orion.attribute('createdBy'),
//   createdAt: orion.attribute('createdAt')
// }))