<template>
    <main class="dashboard">
        <div class="sum-orders">
            <div class="sum-details">
                <span class="material-symbols-outlined new">
                    star
                </span>
                <div class="sum-text">
                    <h3>{{ newOrders }} new orders</h3>
                    <p>Awating processing</p>
                </div>
            </div>
            <div class="sum-details">
                <span class="material-symbols-outlined 2 hold">
                    pause
                </span>
                <div class="sum-text">
                    <h3>{{ onHoldOrders }} orders</h3>
                    <p>On hold</p>
                </div>
            </div>
            <div class="sum-details">
                <span class="material-symbols-outlined out">
                    close
                </span>
                <div class="sum-text">
                    <h3>{{ outOfStock }} product</h3>
                    <p>Out of stock</p>
                </div>
            </div>
        </div>
        <hr />
        <TotalSell />
    </main>
</template>
<style scoped>
hr {
    margin: 15px 0;
    opacity: 0.3;
}

.dashboard {
    padding: 22px 40px;
}

.sum-orders {
    display: flex;
    align-items: center;
    gap: 15px;
}

.sum-details {
    display: flex;
    gap: 8px;
    align-items: center;
    transition: 0.2s all ease-in-out;
}

.sum-details span {
    padding: 8px;
    border-radius: 4px;
}

.sum-details span.new {
    background-color: mediumspringgreen;
    color: darkgreen;
}

.sum-details span.hold {
    background-color: rgb(255, 176, 30);
    color: rgb(194, 107, 0);
}

.sum-details span.out {
    background-color: red;
    color: darkred;
}

.sum-text h3 {
    font-size: 16px;
}

.sum-text p {
    font-size: 12px;
}

@media screen and (max-width: 768px) {
    .sum-orders {
        display: block;
        gap: 0;
    }

    .sum-details:nth-child(1),
    .sum-details:nth-child(2) {
        margin-bottom: 10px;
    }
}
</style>
<script>
import TotalSell from '../components/TotalSellChart.vue'

export default {
    props: {
        newOrders: {
            type: Number,
            default: 16,

        },
        onHoldOrders: {
            type: Number,
            default: 4,
        },
        outOfStock: {
            type: Number,
            default: 2,
        }
    },
    components: {
        'TotalSell': TotalSell,
    }
}
</script>
