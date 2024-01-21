const { createApp } = Vue;
const app = createApp({
    data() {
        return{
            message: 'Hello World',
            image: 'https://static.printler.com/cache/d/8/a/2/b/8/d8a2b86334d2130a72fc61ee9f262ec007f4c006.jpg',
        }
    }
});
app.mount('#root');