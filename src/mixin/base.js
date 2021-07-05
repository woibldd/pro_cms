


export const BaseMixin = {
    created: function () {

    },
    methods: {
        showLoading(msg) {
            this.Toast = this.$toast.loading({
                duration: 0, // 持续展示 toast
                forbidClick: true,
                message: msg || ""
            });
            // const isBitKeepInvoke = typeof BitKeepInvoke !== "undefined";
            // // this.isLoading = true;
            // isBitKeepInvoke && BitKeepInvoke.showLoading();
        },
        hideLoading() {
            if (this.Toast) {
                this.Toast.clear();
            }
            // const isBitKeepInvoke = typeof BitKeepInvoke !== "undefined";
            // // this.isLoading = false;
            // isBitKeepInvoke && BitKeepInvoke.hideLoading();
        },
    }
} 