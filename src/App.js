import logo from './logo.svg';
import './App.css';
import { Button, FormControl, FormLabel, HStack, Input, transition, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react'


function App() {
  const [email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  const [isValid,setIsValid]=useState(false)
  const [position,setPosition]=useState("flex-start")
  const [emailisValid,setEmailIsValid]=useState("black")
  const [passwordisValid,setPasswordisValid]=useState("black")

  const onChangeEmail=(evt)=>{
    setEmail( evt.target.value)
    console.log(evt.target.value+" Password:"+Password)
    if(evt.target.value== "agbessi558@gmail.com" && Password=="Eric" ){
      setIsValid(true)
      setEmailIsValid("black")
      console.log("true")
    }
    else if(evt.target.value=="agbessi558@gmail.com"){
      setEmailIsValid("black")
      setIsValid(false)
      console.log("2false")
    }
    else{
      setIsValid(false)
      setEmailIsValid("red")
      console.log("false")
    }
  }

  const onChangePassword=(evt)=>{
    setPassword(evt.target.value)
    console.log(evt.target.value+" Email:"+email)
    if(email=="agbessi558@gmail.com" && evt.target.value=="Eric" ){
      setIsValid(true)
      setPasswordisValid("black")
      console.log("true")
    }
    else if(evt.target.value=="Eric"){
      setPasswordisValid("black")
      setIsValid(false)
      console.log("2false")
    }
    else{
      setIsValid(false)
      setPasswordisValid("red")
      console.log("false")
    }
  }


  const toast = useToast()
  const onMouse=()=>{
    if(isValid==true){
      
    }
    else{
      if(email!="agbessi558@gmail.com"){
        toast({
          title: 'Email',
          position: 'bottom-left',
          description: "Your mail is incorrect",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
      if(Password!="Eric"){
        toast({
          title: 'Password',
          position: 'bottom-left',
          description: "Your Password is incorrect",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
      if(position=="flex-start"){
        setPosition("flex-end")
      }else if(position=="flex-end"){
        setPosition("flex-start")
      }
    }
    
  } 


  

  return (
    <VStack w="100%" h="100vh" border="1px solid black" justifyContent="center">
        <VStack padding="20px" w="30%" borderRadius="15px" boxShadow="1px 1px 9px 1px rgba(0,0,0,0.75);">
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input color={emailisValid} type="email" onChange={onChangeEmail}/>
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input color={passwordisValid} onChange={onChangePassword} type="password"/>
            </FormControl>
            <HStack w="100%" justifyContent={position}>
                <Button  onMouseOver={onMouse} bgColor="blue.100" >Connexion</Button>
            </HStack>
        </VStack>
    </VStack>
  );
}

export default App;
