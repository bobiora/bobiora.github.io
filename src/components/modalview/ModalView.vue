<template>
    <div class="modal-wrap" ref="modal-wrap">
        <div class="modal-view">
            <div class="modal-view__header">
                <h2 class="modal-view__heading">{{modalTitle}}</h2>
                <span
                    class="modal-view__close"
                    @click="closeModal"
                >
                    &#10005;
                </span>
            </div>
            <div class="modal-view__content">
                <slot></slot>
            </div>
            <div class="modal-view__footer">
                <button
                    class="btn"
                    @click="btnAction"
                >
                    {{btnModal}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "ModalView",
    props:{
        modalTitle:{
            type: String,
            default: "Modal Title"
        },
        btnModal: {
            type: String,
            default: "Done"
        }
    },
    data(){
        return {}
    },
    computed:{},
    methods: {
        closeModal() {
            this.$emit("closeModal")
        },
        btnAction() {
            this.$emit("btnAction")
        }
    },
    mounted() {
        let that = this
        document.addEventListener("click", function(e) {
            if(e.target === that.$refs["modal-wrap"]){
                that.closeModal()
            }
        })
    }
}
</script>

<style lang="sass">
.modal-wrap
    display: flex
    justify-content: center
    align-items: center
    position: absolute
    right: 0
    left: 0
    top: 0
    bottom: 0
    background-color: rgba(255,255,255,.2)
.modal-view
    padding: 15px
    position: absolute
    left: 50%
    right: 50%
    width: 500px
    transform: translate(-50%,-50%)
    z-index: 9
    background-color: #fff
    box-shadow: 0 0 3px rgba(0,0,0, .2)
    &__header,
    &__content
        display: flex
        justify-content: space-between
        align-content: center
    &__content
        flex-direction: column
</style>
