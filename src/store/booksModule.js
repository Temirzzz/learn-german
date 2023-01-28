export default {
  state: {
    books: [
      {
        id: "dsnsacnasckan",
        title: "Harry Potter und der Stein der Weisen - 1",
        description: "Первая глава первой книги о Гарри Поттере",
        imageId: "sdnfskldfcmap",
        level: ["B1", "C1"],
        raiting: 4,
        raitingCount: 100,
        youtube_playlist_id: "sdnkscsc",
        parts: [
          {
            id: "csdcsdc",
            title: "Kapitel 1",
            youtube_id: "sd.csd",
          },
          {
            id: "csdcsdsdc",
            title: "Kapitel 2",
            youtube_id: "sd.cdsd",
          },
          {
            id: "csdcsqdc",
            title: "Kapitel 3",
            youtube_id: "sdkcsd",
          },
          {
            id: "csdcsedc",
            title: "Kapitel 4",
            youtube_id: "sdqcsd",
          },
        ],
      },
      {
        id: "dsnsayjcnjkasckan",
        title: "Harry Potter und der Stein der Weisen - 2",
        description: "Вторрая глава первой книги о Гарри Поттере",
        imageId: "sdnfsasdkldfcmap",
        level: ["B1", "B2"],
        raiting: 3.5,
        raitingCount: 55,
        youtube_playlist_id: "sdnkssdcsc",
        parts: [
          {
            id: "csdcsdc",
            title: "Kapitel 1",
            youtube_id: "sd.csd",
          },
          {
            id: "csdcsdsdc",
            title: "Kapitel 2",
            youtube_id: "sd.cdsd",
          },
          {
            id: "csdcsqdc",
            title: "Kapitel 3",
            youtube_id: "sdkcsd",
          },
          {
            id: "csdcsedc",
            title: "Kapitel 4",
            youtube_id: "sdqcsd",
          },
        ],
      },
      {
        id: "dsnsfghsddacnasckan",
        title: "Harry Potter und der Stein der Weisen - 3",
        description: "Третья глава первой книги о Гарри Поттере",
        imageId: "sdnfskldjkfcmap",
        level: ["B1", "C1"],
        raiting: 1,
        raitingCount: 100,
        youtube_playlist_id: "sdnkjkscsc",
        parts: [
          {
            id: "csdcsdc",
            title: "Kapitel 1",
            youtube_id: "sd.csd",
          },
          {
            id: "csdcsdsdc",
            title: "Kapitel 2",
            youtube_id: "sd.cdsd",
          },
          {
            id: "csdcsqdc",
            title: "Kapitel 3",
            youtube_id: "sdkcsd",
          },
          {
            id: "csdcsedc",
            title: "Kapitel 4",
            youtube_id: "sdqcsd",
          },
        ],
      },
    ],
  },
  getters: {
    getBooks: (state) => state.books,
  },
  mutations: {
    SET_BOOKS(state, payload) {
      state.books = payload;
    },
  },
  actions: {},
};
