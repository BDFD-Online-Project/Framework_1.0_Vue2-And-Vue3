let data = {
  input: {
    type: 'TOPIC 1',
    title: 'test title 1'
  },
  menu: [
    { type: 'TOPIC 1', title: 'title 1', link: 'https://www.google.com' },
    { type: 'TOPIC 2', title: 'title 2', link: 'https://www.google.com' },
    { type: 'TOPIC 2', title: 'title 3', link: 'https://www.google.com' },
    { type: 'TOPIC 3', title: 'title 4', link: 'https://www.google.com' },
    { type: 'TOPIC 3', title: 'title 5', link: 'https://www.google.com' },
    { type: 'TOPIC 3', title: 'title 6', link: 'https://www.google.com' },
    { type: 'TOPIC 4', title: 'title 7', link: 'https://www.google.com' },
    { type: 'TOPIC 4', title: 'title 8', link: 'https://www.google.com' },
    { type: 'TOPIC 4', title: 'title 9', link: 'https://www.google.com' },
    { type: 'TOPIC 4', title: 'title 10', link: 'https://www.google.com' },
    { type: 'TOPIC 5', title: 'title 11', link: 'https://www.google.com' },
    { type: 'TOPIC 5', title: 'title 12', link: 'https://www.google.com' },
    { type: 'TOPIC 5', title: 'title 13', link: 'https://www.google.com' },
    { type: 'TOPIC 5', title: 'title 14', link: 'https://www.google.com' },
    { type: 'TOPIC 5', title: 'title 15', link: 'https://www.google.com' },
    { type: 'TOPIC 6', title: 'title 16', link: 'https://www.google.com' },
    { type: 'TOPIC 6', title: 'title 17', link: 'https://www.google.com' },
    { type: 'TOPIC 6', title: 'title 18', link: 'https://www.google.com' },
    { type: 'TOPIC 6', title: 'title 19', link: 'https://www.google.com' },
    { type: 'TOPIC 6', title: 'title 20', link: 'https://www.google.com' },
    { type: 'TOPIC 6', title: 'title 21', link: 'https://www.google.com' }
  ]
};

let vm = new Vue({
  el: '#app',
  data: data,
  methods: {
    inputHandler() {
      if (this.input.title) {
        this.menu.push({
          type: this.input.type,
          title: this.input.title,
          link: 'javascript:;'
        });
        this.input.title = '';
      }
    }
  }
});
