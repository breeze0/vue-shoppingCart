var app = new Vue({
  el: '#app',

  data: {
    list: [
      {
        id: 1,
        name: 'iPhone 7',
        price: 6188,
        count: 1,
        isChecked: true
      },

      {
        id: 2,
        name: 'iPad Pro',
        price: 5888,
        count: 1,
        isChecked: true
      },

      {
        id: 3,
        name: 'MacBook Pro',
        price: 21488,
        count: 1,
        isChecked: true
      }
    ],

    isCheckAll: true
  },

  computed: {
    totalPrice: function () {
      var total = 0;
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].isChecked) {
          total += this.list[i].price * this.list[i].count;
        }
      }
      return total;
    }
  },

  methods: {
    handleReduce: function (index) {
      this.list[index].count--;
    },

    handleAdd: function (index) {
      this.list[index].count++;
    },

    handleRemove: function (index) {
      this.list.splice(index,1);
    },

    handleSelect: function (index) {
      this.list[index].isChecked = !this.list[index].isChecked;
      var checkedNum = 0;
      for(var i=0; i < this.list.length; i++) {
        if(this.list[i].isChecked) {
          checkedNum++;
        }
      }
      if(checkedNum == this.list.length) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
      }      
    },

    handleSelectAll: function() {
      this.isCheckAll = !this.isCheckAll;
      for(var i=0; i < this.list.length; i++) {
        if(this.isCheckAll) {
          this.list[i].isChecked = true;
        } else {
          this.list[i].isChecked = false;
        }
      }

    }
  }
})