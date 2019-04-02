const initState = {
    projects: [
       {id: '1', title: 'vitt bälte', conent: 'namn brodyr grått'},
       {id: '2', title: 'grönt bälte', conent: 'namn brodyr vitt'},
       {id: '3', title: 'blått bälte', conent: 'namn brodyr gult'},
    ]
}

    const projectReducer = (state = initState, action) => {
       switch (action.type) {
          case 'CREATE_PROJECT':
            console.log('created project', action.project)
       }
       return state
    }

    export default projectReducer