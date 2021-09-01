<template>
  <div class="row">
    <div class="col-12 mb-2 text-end">
      <router-link
        :to="{ name: 'addHotel' }"
        class="btn btn-primary float-right"
        >Create</router-link
      >
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Hotels</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Hotel Name</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody v-if="hotels">
                <tr v-for="(hotel, key) in hotels" :key="key">
                  <td>{{ hotel.hotelName }}</td>
                  <td>{{ hotel.location }}</td>
                  <td>
                    <router-link
                      :to="{
                        name: 'editHotel',
                        params: { id: hotel.id },
                      }"
                      class="btn btn-success"
                      >Edit</router-link
                    >
                    <button
                      type="button"
                      @click="deleteHotel(hotel.id)"
                      class="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="4" align="center">No Hotels Found.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotels",
  data() {
    return {
      hotels: [],
    };
  },
  created() {
    this.getHotels();
  },
  methods: {
    async getHotels() {
      await this.axios
        .get("/api/hotel")
        .then((response) => {
          this.hotels = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.hotels = [];
        });
    },
    deleteHotel(id) {
      if (confirm("Are you sure to delete this hotel ?")) {
        this.axios
          .delete(`/api/hotel/${id}`)
          .then((response) => {
            this.getHotels();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>