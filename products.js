import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const site = 'https://vue3-course-api.hexschool.io/v2/';
const apiPath = 'niniin';

const app = createApp({
  data(){
    return{
      products: [],
      apiUrl: 'https://vue3-course-api.hexschool.io/v2/',
      apiPath: 'ni_week2',
      tempProduct: {},
      productsNum: 0,
    }
  },
  methods: {
    checkLogin(){
      const url = `${this.apiUrl}api/user/check`;
      axios.post(url)
        .then(res => {
          // console.log(res);
          this.getProducts();
        })
        .catch(err => {
          alert(err.response.data.message)
          window.location = 'login.html';
        })
      },
    getProducts(){
      const url = `${this.apiUrl}api/${this.apiPath}/admin/products/all`;
      axios.get(url)
        .then(res => {
          // console.log(res);
          this.products = res.data.products;
          this.productsNum = Object.keys(this.products).length;
      })
    }
  },
  mounted(){
    const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith('Token='))
        ?.split('=')[1];
    axios.defaults.headers.common['Authorization'] = cookieValue;
    this.checkLogin();
    
    // console.log(this);
  }
});

app.mount('#app');

// const cookieValue = document.cookie
//         .split('; ')
//         .find((row) => row.startsWith('Token='))
//         ?.split('=')[1];
//       console.log(cookieValue);

// createApp({
//   data() {
//     return {
//       apiUrl: 'https://vue3-course-api.hexschool.io/v2',
//       apiPath: 'niniin',
//       products: [],
//       tempProduct: {},
//     }
//   },
//   methods: {
//     checkAdmin() {
//       const url = `${this.apiUrl}/api/user/check`;
//       axios.post(url)
//         .then(() => {
//           this.getData();
//         })
//         .catch((err) => {
//           // alert(err.response.data.message)
//           // window.location = 'login.html';
//         })
//     },
//     getData() {
//       const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
//       axios.get(url)
//         .then((response) => {
//           this.products = response.data.products;
//         })
//         .catch((err) => {
//           alert(err.response.data.message);
//         })
//     },
//     openProduct(item) {
//       this.tempProduct = item;
//     }
//   },
//   mounted() {
//     // 取出 Token
//     const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
//     axios.defaults.headers.common.Authorization = token;

//     this.checkAdmin()
//   }
// }).mount('#app');

// createApp({
//   data() {
//     return {
//       apiUrl: 'https://vue3-course-api.hexschool.io/v2',
//       apiPath: 'niniin',
//       products: [],
//       tempProduct: {},
//     }
//   },
// }).mount('#app');