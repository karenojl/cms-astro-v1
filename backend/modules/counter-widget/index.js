export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Counter'
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Title',
        def: 'Interactive Counter'
      },
      initialValue: {
        type: 'integer',
        label: 'Initial Value',
        def: 0
      },
      backgroundTone: {
        type: 'select',
        label: 'Gradient Tone',
        def: 'ocean',
        choices: [
          {
            label: 'Ocean',
            value: 'ocean'
          },
          {
            label: 'Sunset',
            value: 'sunset'
          },
          {
            label: 'Mint',
            value: 'mint'
          },
          {
            label: 'Berry',
            value: 'berry'
          }
        ]
      },
      borderWidth: {
        type: 'range',
        label: 'Border Width',
        min: 0,
        max: 12,
        step: 1,
        def: 2
      },
      borderRadius: {
        type: 'range',
        label: 'Border Radius',
        min: 0,
        max: 48,
        step: 2,
        def: 28
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'initialValue' ]
      },
      styles: {
        label: 'Styles',
        fields: [ 'backgroundTone', 'borderWidth', 'borderRadius' ]
      }
    }
  }
};
