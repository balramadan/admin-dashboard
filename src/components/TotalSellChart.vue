<template>
    <div id="SellChart">
        <div class="month-chart">
            <h3>Total sells</h3>
            <p>Payment received across all channels</p>
        </div>
        <canvas id="totalSell" width="100%"></canvas>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
    data() {
        return {
            dataTotal: [
                69, 20, 34, 30, 59, 94, 101, 256, 144, 123, 150, 98, 76, 130, 44, 122, 232, 114, 154, 45, 123, 150, 98, 76, 130, 44, 123, 150, 98
            ],
            dataTotalSums: 0,
        }
    },
    mounted() {

        // Chart data
        const ctx = document.getElementById('totalSell');

        try {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['1 Feb', '2 Feb', '3 Feb', '4 Feb', '5 Feb', '6 Feb', '7 Feb', '8 Feb', '9 Feb', '10 Feb', '11 Feb', '12 Feb',
                        '13 Feb', '14 Feb', '15 Feb', '16 Feb', '17 Feb', '18 Feb', '19 Feb', '20 Feb', '21 Feb', '22 Feb', '23 Feb',
                        '24 Feb', '25 Feb', '26 Feb', '27 Feb', '28 Feb', '29 Feb'],
                    datasets: [{
                        label: 'Sell',
                        data: this.dataTotal,
                        borderWidth: 1,
                        backgroundColor: '#8ec3b0',
                        borderColor: '#333',
                    }]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        y: {
                            beginAtZero: true,
                            padding: 25
                        }
                    }
                }
            });
        } catch (e) {
            console.log(e)
        }

        // Export total data to another file
        let sums = 0;

        for (let total in this.dataTotal) {
            sums += this.dataTotal[total];
        }

        this.dataTotalSums = sums;

        function sumsTotal() {
            console.log(this.dataTotalSums)
        }
    }
}

</script>
<style>
#SellChart h3 {
    font-size: 22px;
}

#SellChart p {
    font-size: 14px;
}

#totalSell {
    height: 50%;
}

@media screen and (max-width: 768px) {
    #totalSell {
        height: 100vh;
    }
}
</style>