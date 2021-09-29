<template>
 <div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 mt-80"  v-for="soudou in info" :key="soudou">
            <div class="card bg-white d-flex align-items-center justify-content-center">
                <div class="w-100"><img src="https://images.pexels.com/photos/7467850/pexels-photo-7467850.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" class="rounded-circle"></div>
                <div class="text-center ">
                    <p class="name">{{soudou.name}}</p>
                    <p class="job">{{soudou.statut}}</p>  
                    <p class="dis">{{soudou.mail}}</p>
                    <p><button class="btn btn-success">Consulter ce talent</button></p>
                </div>
            </div>
        </div>
         <ul v-if="errors && errors.length">
        <li v-for="error in errors" :key="error">
        {{error.message}}
      </li>
    </ul>
      
    </div>
</div>

   
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      info: [],
      errors: []
    
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`http://localhost:4000/api/stuff`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.info = response.data
    })
   
  }
}
</script>

<style scoped>




body {
    background-color: #eee
}

img {
    height: 150px;
    width: 150px;
    border: 8px solid #eee;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%)
}

.card {
    position: relative;
    width: 100%;
    border-radius: 5px;
    border: none;
    background-color: #FFFF;
    margin:0;
    padding: 0;
    box-sizing: border-box;
   
}


.name {
    font-size: 20px;
    margin-bottom: 6px;
    padding-top: 90px
}

.job {
    color: #fa2525;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 8px
}

.container .card .icons .icon {
    font-size: 14px;
    width: 30px;
    height: 30px;
    color: white;
    background-color: #fa2525;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer
}

.dis {
    color: #7e7c7c;
    line-height: 2
}

.container .card:hover .icons .icon {
    background-color: #f06d6d
}

.container .card:hover .text-center {
    background-color: #fa2525;
    color: white
}

.container .card:hover .job,
.container .card:hover .name {
    color: white
}

.container .card:hover .dis {
    color: #c4c4c4
}

.container .card .icons .icon:hover {
    background-color: rgb(235, 123, 103)
}

.mt-80 {
    margin-top: 90px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>