const initState = {
    projects: [
       {id: '1', title: 'VittBälte', conent: 'NamnBrodyr Med grått tråd'},
       {id: '2', title: 'GröntBälte', conent: 'NamnBrodyr Med vitt tråd'},
       {id: '3', title: 'BlåttBälte', conent: 'NamnBrodyr Med gult tråd'}
    ]
}

    const projectReducer = (state = initState, action) => {
       switch (action.type) {
          case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
          case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
            default:
              return state;    
       }
    };

    export default projectReducer