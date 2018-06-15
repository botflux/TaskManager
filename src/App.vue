<template>
    <div id="app" class="container-fluid">
        <h1 class="display-1">Task manager</h1>
        <div class="row">
            <div class="col-md-2">
                <task-information></task-information>
            </div>
            <div class="col-md-8">
                <task-viewer></task-viewer>
                <done-task-viewer></done-task-viewer>
            </div>
            <div class="col-md-2">
                <adding-task></adding-task>
                <task-actions></task-actions>
            </div>
        </div>

  </div>
</template>

<script>
// import all components
// importe tous les composants
import TaskViewer from './TaskViewer'
import DoneTaskViewer from './DoneTaskViewer'
import AddingTask from './AddingTask'
import TaskActions from './TaskActions'
import TaskInformation from './TaskInformation'

// declare standard VueJS objet with components
// declare un objet VueJS standard avec des composants
export default {
    name: 'app',
    components: {
        TaskViewer,
        DoneTaskViewer,
        AddingTask,
        TaskActions,
        TaskInformation
    }
}
</script>

<style lang="scss">
    /**
    Import of tw bootstrap
    Importation de twitter bootstrap
     */
    @import '../node_modules/bootstrap/scss/bootstrap';


</style>
