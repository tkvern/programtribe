Categories = new orion.collection('categories', {
  singularName: '类别',
  pluralName: '类别',
  title: '类别',
  link: {
    title: '类别'
  },
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      orion.attributeColumn('froala', 'description', 'Description', { orderable: true }), // makes it searchable
      orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
      orion.attributeColumn('createdAt', 'createdAt', 'Created At')
    ]
  }
});

Categories.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  description: orion.attribute('froala', {
      label: 'description'
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));