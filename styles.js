import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    padding: 20,
    fontSize: 40,
  },
  rootInput: {
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    height: 40,
    padding: 10,
    margin: 10,
    width: 200,
  },
  signup_button: {
    marginRight: 60,
    marginLeft: 60,
    marginTop: 30,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'

  },
  exit_button:{
    marginRight: 60,
    marginLeft: 60,
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#ebf2ed00',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  baseText:{
    fontFamily: "Cochin"
  },
  openButton: {
    backgroundColor: "#d0d6d1",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
});


export default styles;