const app = new Vue({
  el: '#app',
  data: {
    pageTitle: `Natalie's 11ty Blog Post Generator`,
    date: '',
    postTitle: '',
    description: '',
    tags: '',
    layout: '',
    content: '',
  },
  methods: {
    addFrontMatter() {
      this.frontMatter.push({
        date: this.date,
        postTitle: this.postTitle,
        description: this.description,
        tags: this.tags,
        layout: this.layout,
        content: this.content,
      });
    },
  },
});
