<template>

    <table class="table mt-5">
        <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Done?</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="t in tasks" v-if="t.isDone">
            <td>{{ t.name }}</td>
            <td>{{ t.description }}</td>
            <td><input type="checkbox" v-model="t.isDone"></td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import taskStore from './store/TasksStore'
    export default {
        name: "DoneTaskViewer",
        data() {
            return {
                state: taskStore.state
            }
        },
        computed: {
            tasks () {
                return this.state.tasks
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>