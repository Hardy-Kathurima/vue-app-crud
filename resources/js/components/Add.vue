<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Add Hotel</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="create">
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
                <button type="submit" class="btn btn-primary">Save</button>
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
  name: "add-hotel",
  data() {
    return {
      hotel: {
        hotelName: "",
        location: "",
      },
    };
  },
  methods: {
    async create() {
      await this.axios
        .post("/api/hotel", this.hotel)
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