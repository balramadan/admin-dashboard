<template>
    <div id="SummaryGrid" class="grid-container">
        <div class="grid-item">
            <div class="flex">
                <div class="total-grid">
                    <h4>Total orders</h4>
                    <p>Last 7 days</p>
                </div>
                <h4>16,233</h4>
            </div>
        </div>
        <div class="grid-item">
            <div class="flex">
                <div class="total-grid">
                    <h4>New costumers</h4>
                    <p>Last 7 days</p>
                </div>
                <h4>324</h4>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
    },
    mounted() {
        console.log(this.dataTotalSums)
    }
}
</script>
<style scoped>
.grid-container {
    padding: 20px 0;
    display: grid;
    width: 100%;
    grid-template-columns: auto auto;
    column-gap: 20px;
    align-items: center;
    justify-content: space-around;
}

.grid-item {
    background-color: #fff;
    padding: 20px;
    box-shadow: 2px 3px rgba(0, 0, 0, 0.2);
}

.flex {
    justify-content: space-between;
    gap: 21vh;
}

.flex h4 {
    font-size: 16px;
}

@media screen and (max-width: 768px) {
    .grid-container {
        display: block;
    }

    .grid-item {
        margin-bottom: 20px;
    }
}
</style>