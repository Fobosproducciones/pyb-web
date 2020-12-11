const settings = {
  name: "joseca-web",
  state: {
    frontity: {
      url: "http://localhost/pruebawordpress/",
      title: "Palo y a la bolsa",
      description: "Estudio de grabación, mezcla y mastering",
    },
  },
  packages: [
    {
      name: "pyb-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://localhost/pruebawordpress/",
          params: {
            per_page: 99,
          },
          postTypes: [
            {
              type: "equipo",
              endpoint: "equipo",
              archive: "/equipos",
            },
            {
              type: "trabajo",
              endpoint: "trabajo",
              archive: "/trabajos",
            },
          ],
          taxonomies: [
            {
              taxonomy: "categoria",
              endpoint: "categoria",
              postTypeEndpoint: "equipo",
            },
            {
              taxonomy: "realizado",
              endpoint: "realizado",
              postTypeEndpoint: "trabajo",
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
