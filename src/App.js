
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
  
        })
  
       
      
      
     
    }
    
  
  render() {
    return(
      <>
     <h1>
     City Explorer
     </h1>
        <Form onSubmit={this.getData}>
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
          
          <Button variant="primary" type="submit" >
          Explore
          </Button>
        </Form>
        {this.state.displayName}
        {this.state.latitude}
        {this.state.longitude}

      </>
    )
  }
}

export default App;


