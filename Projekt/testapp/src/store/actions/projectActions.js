export const createProject = (project) => {

    // I vanlig fall skrevs så
   //return {
    //  type: 'ADD_PROJECT',
    // project: 'project'
     //}
    
     return (dispatch, getState, { getFirebase, getFirestore }) => {
         // Att göra async till database/make async call to database
         const firestore = getFirestore();
         firestore.collection('project').add({
             ...project,
             beltFirstName: 'Zhou',
             beltLastName: 'Bella',
             beltId: 11008,
             createdAt: new Date()
         }).then(() => {
             dispatch({ type: 'CREATE_PROJECT', project }); 
         }).catch((err) => {
             dispatch({ type: 'CREATE_PROJECT_ERROR', err });
         
         })       
      }
  };