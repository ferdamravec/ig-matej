import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: [
      {
        name: "Ruska vlada",
        image: "assets/images/brazil.jpg",
        id: 1,
        likes: 10,
        description:
          "Mesto priamo stvorene na bombardaciu ."
      },
      {
        name: "Hawai media",
        image: "assets/images/hawaii.jpg",
        id: 3,
        description:
        "Pizza hawai je best .Toto je vtip vytvoreny americkymi mediami."
      },
      {
        name: "Moja mamka",
        image: "assets/images/panama.jpg",
        id: 2,
        likes: 666,
        description:
          "Pod chalovat , dole je jedlo ."
      },
      {
        name: "Melov turizmus",
        slug: "jamaica",
        image: "assets/images/jamaica.jpg",
        id: 4,
        likes: 420,
        description:
        "jamaica ma dobre bongo mello random fact .Tato dovolenka bola zaplatena z openlab kasicky ",
      },
    ],
    stories: [
      {
        name: "Makazol",
        image: "assets/images/makazoli.png"
      },
      {
        name: "snoop",
        image: "assets/images/snoop.png"
      },
      {
        name: "max",
        image: "assets/images/max.png"
      },
      {
        name: "snoop",
        image: "assets/images/snoop.png"
      },
      {
        name: "lewis",
        image: "assets/images/lewis.png"
      },
      {
        name: "Makazol",
        image: "assets/images/makazoli.png"
      },
      {
        name: "snoop",
        image: "assets/images/snoop.png"
      },
      {
        name: "max",
        image: "assets/images/max.png"
      },
      {
        name: "snoop",
        image: "assets/images/snoop.png"
      },
      {
        name: "lewis",
        image: "assets/images/lewis.png"
      },
    ]
  },

  getters: {
    posts({ posts }) {
      return posts;
    },
    stories({ stories }) {
      return stories;
    }
  },
  mutations: {},
  actions: {},
});

export default store;
