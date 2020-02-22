export const myMixin = {
    data() {
        return {
            email: ''
        }
    },
    computed: {
        emailToUppercase() {
        return this.email.toUpperCase()
    }
}
};