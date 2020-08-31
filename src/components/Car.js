import React from 'react'
import cars from '../cars.json'
import {Container, Paper, Chip} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    root: {
        marginBottom : "50px"
    },
  });
// import material ui components here //
// Container, Paper, Chip //
const Car = (props) => {
    const classes = useStyles(props);
    let id = props.match.params.id
    let number = parseInt(id)
    let theCar = cars.filter((car)=>{
    console.log(car.id)
    if(car.id === number){
       return car
    }
})
// Acceleration: 12
// Cylinders: 8
// Displacement: 304
// Horsepower: 150
// Miles_per_Gallon: 16
// Name: "amc rebel sst"
// Origin: "USA"
// Weight_in_lbs: 3433
// Year: "1970-01-01"
// id: 4

    console.log(theCar[0])
   return(
         <Container maxWidth = 'sm' className ='myClass'>
            <Paper variant="outlined">
                  <h1>{theCar[0].Name}</h1>
                  <Chip label ={`ID: ${theCar[0].id}`} />
                  <Chip label ={`Acceleration: ${theCar[0].Acceleration}`}/>
                  <Chip label ={`Displacement: ${theCar[0].Displacement}`}/>
                  <Chip label ={`Horsepower: ${theCar[0].Horsepower}`} />
                  <Chip label ={`MPH: ${theCar[0].Miles_per_Gallon}`} />
                  <Chip label ={`Origin: ${theCar[0].Origin}`}/>
                  <Chip label ={`Weight: ${theCar[0].Weight_in_lbs}`}/>
                  <Chip label ={`Year: ${theCar[0].Year}`}/>
                  <Chip label ={`Name: ${theCar[0].Name}`}/>
                  <Chip label ={`Cylinders: ${theCar[0].Cylinders}`}/>
            </Paper>
        </Container>
   )
}

export default Car