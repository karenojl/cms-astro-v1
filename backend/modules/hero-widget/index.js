export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Hero",
  },
  fields: {
    add: {
      label: {
        type: "string",
      },
      sublabel: {
        type: "string",
      },
      body: {
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "@apostrophecms/image": {},
            "@apostrophecms/video": {},
            "@apostrophecms/file": {},
            slideshow: {},
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["label", "sublabel", "body"],
      },
    },
  },
};
