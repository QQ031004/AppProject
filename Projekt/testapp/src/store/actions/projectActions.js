export const createProject = (project) => {

    // I vanlig fall skrevs så
   //return {
    //  type: 'ADD_PROJECT',
    // project: 'project'
     //}
    
     return (dispatch, getState) => {
         // Att göra async till database
         dispatch({ type: 'CREATE_PROJECT', project });
     }
};