<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Update Hotel</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Hotel Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="hotel.hotelName"
                  />
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="hotel.location"
                  />
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "update-hotel",
  data() {
    return {
      hotel: {
        hotelName: "",
        location: "",
        _method: "patch",
      },
    };
  },
  mounted() {
    this.showHotel();
  },
  methods: {
    async showHotel() {
      await this.axios
        .get(`/api/hotel/${this.$route.params.id}`)
        .then((response) => {
          const { hotelName, location } = response.data;
          this.hotel.hotelName = hotelName;
          this.hotel.location = location;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async update() {
      await this.axios
        .post(`/api/hotel/${this.$route.params.id}`, this.hotel)
        .then((response) => {
          this.$router.push({ name: "hotelList" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>