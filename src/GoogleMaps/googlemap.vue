<template>
<div>
    <gmap-map ref="mapRef" :center="center" :zoom="8" style="width:100%;  height: 100vh;">
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
                lat: 37.4220,
                lng: -122.0841
            },
            markers: [],
            places: [],
        };
    },
    mounted() {
        this.geoLocate();
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
                    lat: parseFloat(this.propertyData[i].propertyLatitude),
                    lng: parseFloat(this.propertyData[i].propertyLongitude)
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
