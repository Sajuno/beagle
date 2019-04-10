const vm = new Vue({
  el: "#dogApp",
  data: {
    url: "https://dog.ceo/api",
    breeds: [],
    limit: 12,
    dialog: !1,
    photos: [],
    photosLoader: !1,
    carousel: !1,
    selectedBreed: null,
    mainLoader: !0,
    toast: !1
  },
  created() {
    this.fetchBreeds();
  },
  methods: {
    fetchBreeds() {
      const self = this;
      axios
        .get(`${this.url}/breeds/list`)
        .then(response => {
          const breeds = response.data.message;
          breeds.forEach(breed => {
            let breedData = { name: breed, img: null };
            axios
              .get(`${this.url}/breed/${breed}/images/random`)
              .then(image => {
                breedData.img = image.data.message;
                self.breeds.push(breedData);
              })
              .catch(imageError => {
                console.log(imageError);
              });
          });
          self.mainLoader = !1;
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadMore() {
      this.toast = !0;
      this.limit += 8;
    },
    viewPhotos(breed) {
      const self = this;
      self.photos = [];
      self.selectedBreed = breed;
      self.carousel = !1;
      self.photosLoader = !0;
      self.dialog = !0;
      axios
        .get(`${this.url}/breed/${breed}/images`)
        .then(response => {
          self.photos = response.data.message;
          self.photosLoader = !1;
          self.carousel = !0;
        })
        .catch(error => {
          console.log(error);
        });
    },
    dogApiSite() {
      const dogApiSite = window.open("https://dog.ceo/dog-api/", "_blank");
      dogApiSite.location;
    }
  }
});
