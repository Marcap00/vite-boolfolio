<script>
export default {
    name: 'TechnologiesCardsItemModal',
    props: {
        technology: {
            type: Object,
            required: true
        }
    },
    methods: {
        emitCloseModal() {
            this.$emit('closeModal')
        }
    },
    computed: {
        upperCaseTitle() {
            const firstLetter = this.technology.name.charAt(0).toUpperCase()
            const otherLetters = this.technology.name.substring(1)
            return firstLetter + otherLetters
        },
        imageUrl() {
            return `https://placehold.co/400x300?text=${this.technology.name}`
        },
        technologyBackground() {
            return `background-color: ${this.technology.color}`
        },
    }
};
</script>

<template>
    <div class="d-block modal text-white" id="exampleModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ upperCaseTitle }} technology details</h1>
                    <button type="button" class="btn-close" @click="emitCloseModal()"></button>
                </div>
                <div class="modal-body text-center">
                    <img class="img-fluid rounded mb-2" :src="imageUrl" :alt="technology.name">
                    <h4 class="card-title mb-3">Name: {{ technology.name }}</h4>
                    <p class="card-text">
                        <span class="badge text-black mx-2" :style="technologyBackground">
                            Color: {{ technology.color }}
                        </span>
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" @click="emitCloseModal()">Back <i
                            class="fas fa-arrow-left"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>