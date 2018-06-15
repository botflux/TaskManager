<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Done?</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="t in tasks" v-if="!t.isDone">
                    <td>{{ t.name }}</td>
                    <td>{{ t.description }}</td>
                    <td><input type="checkbox" v-model="t.isDone"></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import taskStore from './store/TasksStore'
    export default {
        name: "TaskViewer",
        data() {
            return {
                state: taskStore.state
            }
        },
        computed: {
            tasks () {
                return this.state.tasks
            }
        }
    }
</script>

<style scoped>
</style>