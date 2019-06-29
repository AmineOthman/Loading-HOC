import React, { Component } from 'react';


const LoaderHOC = (WrappedComponent) =>{


return class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
    }

   
    // isLoading(){
    //     setTimeout(() => {
    //       this.setState({
    //         isloading: false
    //       })
    //     },3000)
    //   }
  
  

    render() { 
        return ( 
           this.props.isLoading   ?<WrappedComponent {...this.props}/> : <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
         )
    }
}
}
 
export default LoaderHOC