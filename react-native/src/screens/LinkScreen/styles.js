import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logoContainer: {
    flex: 1,
    width: 256,
    height: 256
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    backgroundColor: '$plaidBlue',
    borderColor: '$plaidBlue',
    borderRadius: 5,
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 0.5,
      height: 0.5
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    width: 200,
    height: 50
  },
  bodyText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});