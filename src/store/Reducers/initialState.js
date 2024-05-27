
let StoreState = {

  apiCallStatus: {
    apiCallFor: '',
    statusCode: '',
    isLoading: false,
    isCompleted: true,
    isFailed: false,
    message: '',
    isStarted: [],
    isError: [],
  },
  people:{
    peoples:[],
    totalCount:"",
    next:"",
    previous:'',
    vehicles:[],
  }

}
export default StoreState
