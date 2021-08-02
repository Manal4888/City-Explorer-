
  import React from 'react'
  import Form from 'react-bootstrap/Form'
  import axios from 'axios'
  import Button from 'react-bootstrap/Button'
  import Alert from 'react-bootstrap/Alert'
  
  
  class App extends React.Component{
    
  
    constructor(props){
      super(props)
      this.state ={
        displayName:'',
        latitude:'',
        longitude:'', 
        show:false,
        showError:false,
      }
      
  
    }
  
    getData=async (event)=>{
      
       event.preventDefault();
      
       let cityName=event.target.city.value;
      //  console.log({cityName})
     
      //  let URL= `https://us1.locationiq.com/v1/search.php?key=pk.f003d9a37ccabbf3e380637a146e9c6a&q=${cityName}&format=json`;
      //  console.log({URL})
  
       let URL= `http://localhost:3001/data/weather?name=${cityName}`;

      // let URL= `${http://localhost:3001/data/weather?name=Amman}`;
      
      //  console.log({URL})
  
      //  try{
      //    let locResult= await axios.get(URL);
        
      //   this.setState({
      //     displayName:locResult.data[0].display_name,
      //     latitude:locResult.data[0].lat,
      //     longitude:locResult.data[0].lon,
      //     show:true,
      //     showError:false,
      //   })
      //  }
      //  catch{

      //   this.setState({
      //     showError:true,
      //  })
      //  }
      
     
      // }
    
      try{
           let locResult= await axios.get(URL);
          //  console.log(locResult)
           this.setState({
            displayName:locResult.data.city_name,
            latitude:locResult.data.lat,
            longitude:locResult.data.lon,
            show:true,
            showError:false,
          })
         }
         catch{
  
          this.setState({
            showError:true,
         })
         }
        
       
        }
      
  render(){
    
    const style1 = {
      color: "blue",
      backgroundColor: "lightblue",
      padding: "50px",
      fontFamily: "Arial",
       width:" 300px",
       marginLeft:"500px"
       
    };

    const style2 = {
      color: "blue",
      backgroundColor: "yellow",
      padding: "50px",
      fontFamily: "Arial",
       width:" 300px",
       marginLeft:"500px",
        
       
    };
    
      const style3 = {
      color: "blue",
      backgroundColor: "lightblue",
      padding: "10px",
      fontFamily: "Arial",
      fontWeight: 'bold',
      width:" 150px",
       marginLeft:"110px",
       marginTop:"50px"
       
    };
    
    return(
      <>
<body style={{backgroundColor: "gray"}}>


      
     <header style={style1}>
     <h1 style={{color: "black"}}>
     City Explorer
     </h1>
     </header>
     
        <Form onSubmit={this.getData} style={style2}>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label> The City Name </Form.Label>
            <Form.Control type="text" name='city'  placeholder="Enter valid location" />
           
          </Form.Group>

          
          
          <Button variant="primary" type="submit"style={style3} >
          Explore
          </Button>
        </Form>
        


        {this.state.showError&&
        <Alert variant="erorr" style={style1}>
           <Alert.Heading> 404 error  </Alert.Heading>
           <p>
           this page can't be found
           </p>
           <hr />
           <p className="mb-0">
             Try again later on !
           </p>
         </Alert>}

        
        {this.state.show &&
        <p style={{marginLeft:"500px"}}>  
        {this.state.displayName}
        {this.state.latitude}
        {this.state.longitude}
        </p>
           }

        {this.state.show &&
          <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.f003d9a37ccabbf3e380637a146e9c6a&center=${this.state.latitude},${this.state.longitude}&zoom=1-18`} style={{marginLeft:"400px"}}/>
          }
          

</body>      
      </>

    )
  }
}

export default App;


