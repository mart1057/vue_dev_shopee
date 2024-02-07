<template>
  <div class="pl-[40px] pr-[40px] mt-[14px]">
    <div
      class="bg-[white] w-[100%] h-[auto] pt-[1.3vw] pb-[1.3vw] text-[#fc5831] text-[0.9vw]"
    >
      สินค้าแนะนำประจำวัน
    </div>
    <div class="w-[100%] h-[2px] bg-[#fc5831]"></div>
    <div class="w-[100%] h-[auto] pt-[1.3vw] pb-[1.3vw]">
      <div
        class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2"
      >
        <div
          class="h-[auto] text-[red] pl-[8px] pr-[8px] pb-[8px] bg-[white] cursor-pointer"
          v-for="(item, i) in items"
          :key="i"
          @click="routeToDetail(item.id)"
        >
          <div class="flex flex-col justify-between">
            <div>
              <div
                class="flex items-center flex-none w-50 p-2 bg-white rounded xl:w-30"
              >
                <img
                  class="object-contain h20 mx-auto xl:h-80"
                  :src="item.thumbnail"
                  alt=""
                />
              </div>
              <div
                class="flex justify-start text-[#000000] text-[0.9vw] mt-[8px]"
              >
                {{ item.title }}
              </div>
            </div>
            <div class="flex justify-between">
              <div class="mt-[4px] text-[0.9vw] font-bold flex justify-center">
                ฿{{ item.price }}
              </div>
              <div class="text-[#c4c8cc] flex justify-center items-center">
                ขายแล้ว 10 ชิ้น
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getProducts(false);
  },
  methods: {
    getProducts() {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((resp) => {
          this.items = resp.products;
        });
    },
    routeToDetail(id) {
      console.log(id);
      this.$router.push({
        path: "/detail",
        query: { id: id },
      });
    },
  },
};
</script>
