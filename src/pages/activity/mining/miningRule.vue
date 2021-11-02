<template>
  <div class="mining-rule">
    <div class="mining-rule-title">Trading Rewards</div>
    <div class="mining-rule-content">
      Overview of the Trading Rewards program.
    </div>
    <div class="mining-rule-content">
      初始代币 (600,000,000 BKB) 的20.00%（ 将奖励在BKswap进行交易的用户）
    </div>
    <div class="mining-rule-title">Objectives</div>
    <ul class="mining-rule-content">
      <li class="mining-rule-content">激励所有交易者使用BKswap</li>
      <li class="mining-rule-content">加速市场流动性和整体产品使用</li>
    </ul>
    <div class="mining-rule-title-flex">
      <div class="mining-rule-title">Overview</div>
      <!-- <div class="mining-rule-title">Trading Rewards History Data</div> -->
    </div>
    <div class="mining-rule-content">
        BitKeep 将根据一个公式分配给交易者，该公式奖励在BKSwap 进行交易的用户。
        BitKeep Trading rewards 将分为4个周期每个 epoch 将分配 3,835,616 个
        BKB。
      </div>
    <div class="mining-rule-faq">
      <p class="mining-rule-faq-title">1.Who is eligible for trading rewards?</p>
      <p class="mining-rule-faq-content">All traders on the BKswap are aligible to receive BKB as trading rewards.</p>
      <p class="mining-rule-faq-title">2.How much BKB did I earm in the Trading Rewards program?</p>
      <p class="mining-rule-faq-content">In the current epoch,users can see trading value and estimated trading rewards in a day.</p>
      <p class="mining-rule-faq-title">2.How much BKB did I earm in the Trading Rewards program?</p>
      <p class="mining-rule-faq-content">In the current epoch,users can see trading value and estimated trading rewards in a day.</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    // BitKeepInvoke.onLoadReady(() => {
    //   BitKeepInvoke.setTitle(this.$t("mining.miningRule", { v: this.phase }));
    //   BitKeepInvoke.setIconAction();
    // });
  },
};
</script>
<style lang='scss' scoped>
.mining-rule {
  padding: 16px;
  .mining-rule-title {
    font-weight: 500;
    font-size: 18px;
    color: #080d21;
    margin-top: 10px;
  }
  .mining-rule-content {
    font-size: 14px;
    line-height: 22px;
    color: #4b5373;
  }
  .mining-rule-title-flex{
      display: flex;
      justify-content: space-between;
  }
  .mining-rule-faq-title{
    font-size: 16px;
     color: #080d21;
  }
  .mining-rule-faq-content{
    font-size: 14px;
     color: #4b5373;
  }
}
</style>