Topics = new orion.collection('topics', {
  singularName: '主题',
  pluralName: '主题',
  title: '主题',
  link: {
    title: '主题'
  },
  tabular: {
    columns: [
      orion.attributeColumn('hasOne', 'categoryId', 'Categories', { orderable: true }),
      { data: "title", title: "Title" },
      orion.attributeColumn('froala', 'description', 'Description', { orderable: true }),
      orion.attributeColumn('createdAt', 'createdAt', 'Created At'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

Topics.attachSchema(new SimpleSchema({
  categoryId: orion.attribute('hasOne', {
    label: 'Category'
  }, {
  collection: Categories,
    titleField: 'title',
    publicationName: 'toptics_categoryId_schema',
  }),
  title: {
    type: String
  },
  description: orion.attribute('froala', {
      label: 'description'
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}))