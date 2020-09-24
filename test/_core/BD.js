const BD = {
  store: {
    comments: [
      {
        id: 1,
        text: 'lol',
        rate: 100,
        author_id: 15,
        post_id: 1,
      },
      {
        id: 2,
        text: 'lol',
        rate: -100,
        author_id: 17,
        post_id: 1,
      },
      {
        id: 3,
        text: 'lol',
        rate: 20,
        author_id: 15,
        post_id: 1,
      },
      {
        id: 4,
        text: 'lol',
        rate: 20,
        author_id: 15,
        post_id: 1,
      },
      {
        id: 5,
        text: 'lol 2',
        rate: -100,
        author_id: 15,
        post_id: 2,
      },
      {
        id: 6,
        text: 'lol 2',
        rate: -100,
        author_id: 17,
        post_id: 2,
      },
      {
        id: 7,
        text: 'lol 2',
        rate: -100,
        author_id: 15,
        post_id: 2,
      },
    ],
    posts: [
      {
        id: 1,
        text: 'text 1',
        author_id: 18,
      },
      {
        id: 2,
        text: 'text 2',
        author_id: 17,
      },
    ],
    authors: [
      {
        id: 15,
        name: 'author 1',
        date: '10.11.2000',
      },
      {
        id: 17,
        name: 'author 2',
        date: '10.11.1988',
      },
      {
        id: 18,
        name: 'author 4',
        date: '05.06.1980',
      },
    ],
  },
};

module.exports = BD;