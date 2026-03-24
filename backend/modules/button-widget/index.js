export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Button'
  },
  fields: {
    add: {
      label: {
        type: 'string'
      },
      url: {
        type: 'url'
      },
      variant: {
        type: 'select',
        def: 'primary',
        choices: [
          {
            label: 'Primary',
            value: 'primary'
          },
          {
            label: 'Secondary',
            value: 'secondary'
          },
          {
            label: 'Text',
            value: 'text'
          }
        ]
      },
      openInNewTab: {
        type: 'boolean',
        def: false
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: ['label', 'url', 'variant', 'openInNewTab']
      }
    }
  }
};
