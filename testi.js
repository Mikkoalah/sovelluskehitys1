var app = new Vue({
el: '#app',
data: 
{
    title: "Mikko's ToDo-list",
    list: [
        { 
          name:  'Eka tehtävä', 
          completed: false
        },

        {
          name: 'toka tehtävä',
        completed: false
        }

        ], 
    newItem:''

}
})
