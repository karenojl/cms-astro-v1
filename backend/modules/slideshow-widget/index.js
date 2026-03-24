export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Slideshow",
  },
  fields: {
    add: {
      slides: {
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/image": {},
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["slides"],
      },
    },
  },
};
