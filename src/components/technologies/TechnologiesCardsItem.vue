<script>
import TechnologiesCardsItemModal from './TechnologiesCardsItemModal.vue';

export default {
    name: "TechnologiesCardsItem",
    components: {
        TechnologiesCardsItemModal
    },
    data() {
        return {
            modal: false,
        }
    },
    props: {
        technology: {
            type: Object,
            required: true
        }
    },
    methods: {
        toggleModal() {
            return this.modal = !this.modal
        },
    },
    computed: {
        imageUrl() {
            return `https://placehold.co/400x300?text=${this.technology.name}`
        },
        technologyBackground() {
            return `background-color: ${this.technology.color}`
        },
        showModal() {
            return this.modal
        }
    }
}
</script>

<template>
    <div class="col py-3">
        <div class="card text-center border-1 bg-transparent py-3">
            <div class="card-body flex justify-content-center p-0">
                <div class="card-img-top mb-2">
                    <img class="img-fluid" :src="imageUrl" :alt="technology.name">
                </div>
                <h4 class="card-title mb-3">{{ technology.name }}</h4>
                <p class="card-text">
                    <span class="badge text-black mx-2" :style="technologyBackground">
                        {{ technology.color }}
                    </span>
                </p>
                <button type="button" class="btn btn-success" @click="toggleModal()">
                    <i class="fas fa-eye px-2"></i>
                </button>
            </div>
        </div>
        <!-- Modal -->
        <TechnologiesCardsItemModal v-if="showModal" :technology="technology" @closeModal="toggleModal()" />
    </div>
</template>

<style lang="scss" scoped></style>
