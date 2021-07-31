
  import React from 'react'
  import Form from 'react-bootstrap/Form'
  import axios from 'axios'
  import Button from 'react-bootstrap/Button'
  
  class App extends React.Component{
    
  
    constructor(props){
      super(props)
      this.state ={
        displayName:'',
        latitude:'',
        longitude:'', 
        show:false,
      }
      
  
    }
  
    getData=async (event)=>{
      
       event.preventDefault();
      
       let cityName=event.target.city.value;
       console.log({cityName})
     
       let URL= `https://us1.locationiq.com/v1/search.php?key=pk.f003d9a37ccabbf3e380637a146e9c6a&q=${cityName}&format=json`;
       console.log({URL})
  
       let locResult= await axios.get(URL);
        
        this.setState({
          displayName:locResult.data[0].display_name,
          latitude:locResult.data[0].lat,
          longitude:locResult.data[0].lon,
          show:true,
        })
  
       
      
      
     
    }
    
  
  render() {
    
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

      
     <header style={style1}>
     <h1 style={{color: "black"}}>
     City Explorer
     </h1>
     </header>
     
        <Form onSubmit={this.getData} style={style2}>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label> The City Name </Form.Label>
            <Form.Control type="text" name='city'  placeholder="Enter valid location" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          
          <Button variant="primary" type="submit"style={style3} >
          Explore
          </Button>
        </Form>
        {this.state.displayName}
        {this.state.latitude}
        {this.state.longitude}


        
        
        {this.state.show &&
          <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.f003d9a37ccabbf3e380637a146e9c6a&center=${this.state.latitude},${this.state.longitude}&zoom=1-18`}/>
          }
          
      </>
    )
  }
}

export default App;


