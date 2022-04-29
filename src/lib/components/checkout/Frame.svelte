<style>
  [style*='--aspect-ratio'] > :first-child {
    width: 100%;
  }
  [style*='--aspect-ratio'] > img {
    height: auto;
  }
  @supports (--custom: property) {
    [style*='--aspect-ratio'] {
      position: relative;
    }
    [style*='--aspect-ratio']::before {
      content: '';
      display: block;
      padding-bottom: calc(100% / (var(--aspect-ratio)));
    }
    [style*='--aspect-ratio'] > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
</style>

<!-- <div style="--aspect-ratio: 16/9;"> -->
<iframe
  title="css-trick"
  src="https://sandbox.duitku.com/TopUp/v2/TopUpBCAKlikPayPage.aspx?ref=BKAQ5QUY2E55ZS2YE"
  width="480"
  height="900"
  frameborder="0"
/>
<!-- </div> -->
