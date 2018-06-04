<template>

    <h3>Hey! {{ title }}</h3>
    
</template>


<script>

Vue.component('custom-header', {

    props: ['title'],

})

</script>