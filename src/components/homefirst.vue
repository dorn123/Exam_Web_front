<template>
  <b-row>
    <b-col class="pt-4 pl-5">
      <div class="username">
        <i class="fas fa-user-circle" style="font-size: 50px"></i>
        <!-- <img src="https://www.flaticon.com/svg/vstatic/svg/64/64572.svg?token=exp=1613372359~hmac=563aab52c51ff5c87335801428038ec3" alt=""> -->
        <div class="ml-3">
          user name
          <br />
          email
        </div>
      </div>
      <div class="mt-4">Home</div>
      <div>course</div>
    </b-col>

    <b-col cols="10" class="pt-4">
      <div>Home</div>
      <div class="mt-4">
        <b-tabs content-class="mt-3">
          <b-tab title="Course" active class="ml-3">
            <div class="addcourse">
              <p style="font-size: 20px">create course</p>
              <!-- @click="createclassroom" -->
              
              <span class="mt-1 ml-2"><i v-b-modal.modal-1 class="far fa-plus-square">
                </i></span>
            </div>
          </b-tab>
          <b-tab title="Exam"> <p>Exam test</p></b-tab>
        </b-tabs>
      </div>
      <pre>{{ subject }}</pre>
      
    </b-col>
    
    <b-modal id="modal-1" title="สร้างห้อง">
      <p class="my-4">ชื่อวิชา</p>
      <b-form-input :id="`type-${subject}`" :type="type"></b-form-input>
      <p class="my-4">รหัสวิชา</p>
      <b-form-input :id="`type-${subject}`" :type="type"></b-form-input>
    </b-modal>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      form: {
        classname: "dorn",
        classcode: "123",
      },
      subject: [],
    };
  },
  methods: {
    createclassroom() {
        // alert('test');
      var NewSubject = {};
      NewSubject.classname = this.form.classname;
      NewSubject.classcode = this.form.classcode;
      this.subject.push(NewSubject);
    },
  },
};
</script>

<style scoped>
.username {
  display: flex;
}
.addcourse {
  display: flex;
}
/* .add{
    margin-top: 3px;
} */
</style>