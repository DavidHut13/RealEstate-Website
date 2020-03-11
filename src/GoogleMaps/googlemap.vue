<template>
<div>
    <gmap-map ref="mapRef" :center="center" :zoom="8" style="width:100%;  height: 84vh;">
        <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position"></gmap-marker>
    </gmap-map>
</div>
</template>

<script>

export default {
    name: "GoogleMap",
    props: ['searchProp', 'propertyData'],
    data() {
        return {
            center: {
                lat: 32.7555,
                lng: -97.3308
            },
            markers: [],
            places: [],
        };
    },
    mounted() {
        this.geoLocate();
        this.placeMarkers() 
    },
    watch: {
        propertyData: {
            handler() {
                this.placeMarkers()
            },
            deep: true,
        }
    },
    methods: {
        placeMarkers() {
            this.markers = [];
            
            if (this.propertyData.length > 0) {
            for (let i = 0; i <  this.propertyData.length; i++) {
                var marker = {
                    lat: parseFloat(this.propertyData[i].Xcordinate),
                    lng: parseFloat(this.propertyData[i].Ycordinate)
                    };
                this.markers.push({position: marker});
                };
                this.$refs.mapRef.panTo({
                    lat: this.markers[0].position.lat,
                    lng: this.markers[0].position.lng
                })
            }
        },
        geoLocate() {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                });
            }
        }
    }
}
</script>

<style>

</style>
