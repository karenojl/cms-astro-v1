export default {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/layout': {},
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            '@apostrophecms/file': {},
            counter: {}
          }
        }
      },
      objectField: {
        type: 'object',
        fields: {
          add: {
            content: {
              type: 'area',
              options: {
                widgets: {
                  '@apostrophecms/image': {},
                  button: {},
                  counter: {}
                }
              }
            }
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main'
        ]
      }
    }
  }
};
