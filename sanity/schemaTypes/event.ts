export default {
    name: 'event',
    type: 'document',
    title: 'Event',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'location',
        type: 'string',
        title: 'Location',
      },
      {
        name: 'url',
        type: 'url',
        title: 'URL',
      },
      {
        name: 'startTime',
        type: 'datetime',
        title: 'Start Time',
      },
      {
        name: 'endTime',
        type: 'datetime',
        title: 'End Time',
      },
    ],
  };
  