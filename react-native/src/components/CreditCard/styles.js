import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  leftBlock: {
    flex: 7,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightBlock: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  balanceContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  cardNameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2.5,
  },
  endingWithText: {
    color: '$darkGray',
    fontSize: 16,
    textAlign: 'center',
  },
  balanceText: {
    color: '$plaidBlue',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 2.5,
  }
});