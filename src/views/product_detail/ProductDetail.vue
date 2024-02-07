<template>
  <div class="flex justify-center">
    <div class="bg-[white] w-[80%] mt-[14px] pt-[8px]">
      <div class="flex">
        <div class="w-[100%]">
          <div
            class="flex items-center flex-none w-50 p-2 bg-white rounded xl:w-30"
          >
            <img
              class="object-contain h20 mx-auto xl:h-80"
              :src="item.thumbnail"
              alt=""
            />
          </div>
          <div></div>
        </div>
        <div
          class="text-[#000000] flex justify-start ml-[8px] flex-col w-[100%] pr-[14px]"
        >
          <div class="text-[18px] flex">{{ item.title }}</div>
          <div class="text-[14px] mt-[4px] flex">{{ item.rating }} Ratings</div>
          <div
            class="bg-[#f5f5f5] pt-[10px] pb-[10px] w-[100%] text-[24px] pl-[8px] text-[#fc5831] mt-[4px]"
          >
            <div class="flex">
              <div>฿{{ item.price }}</div>
            </div>
          </div>
          <div class="grid grid-cols-3 mt-[12px]">
            <div
              class="flex justify-start items-start text-[14px] text-[#b9baba]"
            >
              โค้ดส่วนลดจากทางร้านค้า
            </div>
            <div>-</div>
          </div>
          <div class="grid grid-cols-3 mt-[14px]">
            <div
              class="flex justify-start items-start text-[14px] text-[#b9baba]"
            >
              ช้อปเพิ่มคุ้มกว่า
            </div>
            <div class="flex justify-center items-center">-</div>
          </div>
          <div class="grid grid-cols-3 mt-[14px]">
            <div
              class="flex justify-start items-start text-[14px] text-[#b9baba]"
            >
              การจัดส่ง
            </div>
            <div class="flex justify-center items-center">-</div>
          </div>
          <div class="grid grid-cols-3 mt-[14px]">
            <div
              class="flex justify-start items-start text-[14px] text-[#b9baba]"
            >
              จำนวน
            </div>
            <div class="flex justify-center items-center">
              <div class="flex">
                <div
                  class="flex justify-center items-center border w-[30px] h-[30px] cursor-pointer text-[20px]"
                >
                  -
                </div>
                <div
                  class="flex justify-center items-center border w-[60px] h-[30px] text-[20px]"
                  @click="count--"
                >
                  {{ count }}
                </div>
                <div
                  class="flex justify-center items-center border w-[30px] h-[30px] cursor-pointer text-[20px]"
                  @click="count++"
                >
                  +
                </div>
              </div>
              <div class="ml-[8px] text-[#b9baba]">
                สินค้าคงเหลือ {{ item.stock }}
              </div>
            </div>
          </div>
          <div class="flex mt-[24px]">
            <button
              class="bg-[#ffeee8] pl-[18px] pr-[18px] pt-[8px] pb-[8px] text-[14px] text-[#ee4d2d]"
            >
              เพิ่มไปยังรถเข็น
            </button>
            <button
              class="bg-[#ee4d2d] pl-[18px] pr-[18px] pt-[8px] pb-[8px] text-[14px] ml-[8px] text-white"
            >
              ซื้อสินค้า
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: {},
      count: 1,
    };
  },
  mounted() {
    this.getProductsDetail();
  },
  methods: {
    getProductsDetail() {
      fetch("https://dummyjson.com/products/" + this.$route.query.id)
        .then((response) => response.json())
        .then((resp) => {
          this.item = resp;
        });
    },
  },
};
</script>
