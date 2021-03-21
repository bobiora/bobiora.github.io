<template>
    <div class="select">
        <p
            class="select__title"
            @click="areOpVisible = !areOpVisible"
        >{{selected}}</p>
        <div
            class="select__options"
            v-if="isExpanded || areOpVisible"
        >
            <p
                class="select__option"
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
                {{option.name}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Select",
    props: {
        options: {
            type: Array,
            default(){
                return []
            }
        },
        selected: {
            type: String,
            default: ""
        },
        isExpanded:{
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            areOpVisible: false
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select', option);
            this.areOpVisible = false;
        },
        hideSelect(){
            this.areOpVisible = false;
        }
    },
    mounted() {
        document.addEventListener("click", this.hideSelect.bind(this), true);
    },
    beforeDestroy() {
        document.removeEventListener("click", this.hideSelect);
    }

}
</script>
<style lang="sass">
    .select
        position: relative
        margin: 0 auto 30px
        text-align: left
        border: 1px solid rgba(0,0,0,.2)
        &__title
            font-weight: bold
            padding: 3px 15px
            cursor: pointer
            border-bottom: 1px solid rgba(0,0,0,.2)
        &__options
            background-color: #fff
            /*position: absolute*/
            left: 0
            top: 100%
            width: 100%
        &__option
            cursor: pointer
            padding: 5px 15px
            &:hover
                background-color: #ebebeb

</style>
