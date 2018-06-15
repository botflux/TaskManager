<template>
    <div class="card">
        <div class="card-header">
            Information
        </div>
        <div class="card-body">
            <div class="card-text">Done: {{ doneTaskCount }}</div>
            <div class="card-text">To do {{ notDoneTaskCount }}</div>
        </div>
    </div>
</template>

<script>
    import taskStore from './store/TasksStore'
    export default {
        name: "TaskInformation",
        data () {
            return {
                state: taskStore.state
            }
        },
        computed: {
            doneTaskCount () {
                let i = 0
                this.state.tasks.forEach(function (t) {
                    if (t.isDone) {
                        i++
                    }
                })
                return i
            },
            notDoneTaskCount () {
                let i = 0
                this.state.tasks.forEach(function (t) {
                    if (!t.isDone) {
                        i++
                    }
                })
                return i
            }
        }
    }
</script>

<style scoped>

</style>