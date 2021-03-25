<template>
  <div class="main">
    <div class="main-title">{{ msg }}</div>
    <div class="user-count">
      <div v-if="count === null" class="count">Wait</div>
      <div v-else class="count">{{ count.length }}</div>
      Users
    </div>
    <div class="wrapper">
      <div v-for="user in users" :key="user.name" class="card">
        <div class="body-card">
          <div class="title">Name</div>
          <div class="name">{{ user.name }}</div>
          <div class="wrapper-card">
            <div>
              <div class="title">Email</div>
              <div class="email">{{ user.email }}</div>
            </div>
            <div>
              <div class="title">Phone</div>
              <div class="phone">{{ user.phone }}</div>
            </div>
            <div>
              <div class="title">Website</div>
              <div class="website">{{ user.website }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Users",
  props: ['msg'],
  computed: {
    ...mapGetters({
      users: 'getData',
      count: 'getCountData'
    })
  },
  methods: {
    ...mapActions({
      getData: 'getDatas'
    })
  },
  mounted() {
    this.getData()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #f5f7fa;
  padding: 10px;
}
.count {
  color: #83dd8b;
  font-weight: bolder;
  margin-right: 10px;
}
.user-count {
  border-bottom: 1px solid #e1e1e7;
  color: #646464;
  display: flex;
}
.wrapper{
  margin: 0 -5px;
}
.wrapper::after{
  content: '';
  display: table;
  clear: both;
}
.card {
  float: left;
  width: 43.5%;
  padding: 10px;
  margin: 10px 5px 0 25px;
}

.card .body-card{
  padding: 30px 20px 20px 20px;
  background-color: white;
  width: 100%;
  border-radius: 15px;
}

.card .body-card .title{
  color: #e3e5e9;
}

.card .body-card .name{
  font-size: 25px;
}

.card .body-card .wrapper-card{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.card .body-card .wrapper-card .website{
  margin-top: 5px;
  color: rgb(81, 243, 81);
  font-weight: bolder;
}

.card .body-card .wrapper-card .email{
  margin-top: 5px;
}

.card .body-card .wrapper-card .phone{
  margin-top: 5px;
}

@media (max-width: 992px){
  .card{
    width: 100vh;
    margin: 0;
  }
}

</style>
