<template>
    <div>
        <canvas id="myChart" width="100%" height="30vh"></canvas>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
    mounted() {
        const ctx = document.getElementById('myChart');

        try {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['1 Feb', '15 Feb', '29 Feb'],
                    datasets: [{
                        label: 'Sell',
                        data: [69, 121, 198],
                        borderWidth: 1,
                        backgroundColor: '#8ec3b0',
                        borderColor: '#333'
                    }]
                },
                options: {
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
    }
}
</script>
<style lang="">
    
</style>