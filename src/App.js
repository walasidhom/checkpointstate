import React from 'react';
import { Container } from 'react-bootstrap';
import myImage from './images/profilePhoto.webp';



class App extends React.Component {
  state = {
    Person: {
            fullName:'Wala Sidhom',
            bio:"I am passionate about learning new technologies, bringing ideas to life, and working with dedicated teams to build efficient and robust applications suited to the user's needs.",
            imgSrc: myImage,
            profession:'Frontend Developer Engineer'
    },
    show: false,
    count: 0,
    intervalId: 0
  };
        
        
    
  
  toggleShow = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }

componentDidMount() {
    const newIntervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      });
    }, 1000);

  this.setState(prevState => {
    return {
      ...prevState,
      intervalId: newIntervalId,
    };
  });
}

  render() { 
    const styles = {
      border: '10px solid #f15079ea',
      marginTop: '10px',
      justifyContent: 'center',
      background: '#f15079ea',
      color: '#ffffff'
   };
    return (
      <Container className='auth-inner'>
        {this.state.show && (
          <>
            <div className='div--center'>
              <img
                src={this.state.Person.imgSrc}
                  alt='profile'
              height='200px' />
            </div>
            <div className='name-style div--center'>{this.state.Person.fullName}</div>
            <div className='address-style div--center'>{this.state.Person.profession}</div>
            <p className='div--center'>{this.state.Person.bio}</p>
            <div style={styles}>The component has been rendered for {this.state.count} seconds</div>
          </>
        )}

        <div className='div--center' style={{paddingTop: '20px'}}>
          <button onClick={this.toggleShow}>click here</button>
        </div>
      </Container>
      );
  }
}
 
export default App;
