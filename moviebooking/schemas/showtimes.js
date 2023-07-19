import { defineType } from 'sanity';

export default defineType({
   name:'showtimes',
   title:'ShowTimes',
   type:'document',
   fields:[
       {
           name:'time',
           type:'string'
       },
       {
           name:'movie',
           title:'Movie',
           type:'reference',
           to:[{type:'movie'}]
       },
       {
           name:'theatre',
           title:'Theatre',
           type:'reference',
           to:[{type:'theatre'}]
       },
       {
           name:'row',
           title:'Row',
           type:'array',
           of:[{type:'row'}]
       },
      
   ]
})