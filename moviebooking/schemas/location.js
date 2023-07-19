import { defineType } from 'sanity';

export default defineType({
   name:'location',
   title:'Location',
   type:'document',
   fields:[
    {
        name:'city',
        title:'City',
        type:'string'
    },
       {
           name:'image',
           title:'Image',
           type:'string'
       },
      
   ]
})