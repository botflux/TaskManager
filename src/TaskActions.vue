<template>
    <div class="card mt-5">
        <div class="card-header">
            Task actions
        </div>
        <div class="card-body">
            <div class="form-group">
                <button class="btn btn-danger form-control" @click="clear">Clear</button>
            </div>
        </div>
    </div>
</template>

<script>
    import taskStore from './store/TasksStore'
    export default {
        name: "TaskActions",
        data () {
            return {
                state: taskStore.state
            }
        },
        methods: {
            clear () {
                taskStore.clear()
            }
        }
    }
</script>

<style scoped>

</style>