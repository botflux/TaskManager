<template>
    <!-- template of this component, this is a card with an header and a body.
         In the body there is a simple form vuejs bindings (v-model) and submit (@click bind to add method)
     -->
    <!-- le template de ce composant est représenté par une carte avec une en-tête et un corps.
        Le corps est composé d'un formulaire basique avec des liaisons VueJS (v-model) et le bouton de soumission (@click lié à la méthode add)
        -->
    <div class="card">
        <div class="card-header">
            Add a new task
        </div>
        <div class="card-body">
            <form action="#" @submit="add">
                <div class="form-group">
                    <label for="taskName">Task name</label>
                    <input type="text" id="taskName" v-model="tempName" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="taskDescription">Task description</label>
                    <input type="text" id="taskDescription" v-model="tempDescription" class="form-control" required>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-success form-control" @click="add">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    /**
     * This components is used to add tasks
     * Ce composant est utilisé pour ajouter des tâches
     */

    /**
     * Import of the taskStore
     * Importation du taskStore
     */
    import taskStore from './store/TasksStore'
    export default {
        name: "AddingTask",
        data () {
            /**
             * data used by this component
             * données utilisées par ce composant
             */
            return {
                state: taskStore.state,
                tempName: '',
                tempDescription: ''
            }
        },
        methods: {
            /**
             * Method(s) used by this component
             * Methodes utilisées par ce composant
             */


            /**
             * Used to submit the task form
             * Utilisé pour valider le formulaire de tâche
             * @param e
             */
            add (e) {
                /**
                 * add the task
                 * ajout de la tâche
                 */
                taskStore.add(this.tempName, this.tempDescription)
                /**
                 * reset of the fields
                 * remise à zero des champs
                 */
                this.tempName = ''
                this.tempDescription = ''

                /**
                 * stoping form propagation
                 * arrêt de propagation du formulaire
                 */
                e.preventDefault()
            }
        }
    }
</script>

<style scoped>

</style>