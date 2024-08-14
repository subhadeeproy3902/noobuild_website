export default {
    name: 'organizers',
    title: 'Organizers',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'post',
        title: 'Post',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'linkedin',
        title: 'Linkedin Link',
        type: 'url',
      },
      {
        name: 'twitter',
        title: 'Twitter Link',
        type: 'url',
      },
    ],
  };
  