const app = new Vue({
  el: '#app',
  data: {
    date: '',
    title: '',
    description: '',
    tags: [],
    layout: ['posts.njk', 'page.njk'],
    content: '',
  },
  methods: {
    newPost() {
      this.newPost.push({
        date: this.date,
        title: this.title,
        description: this.description,
        tags: this.tags,
        layout: this.layout,
        content: this.content,
      });
      this.newPost = '';
      console.log(date);
    },
  },
});
