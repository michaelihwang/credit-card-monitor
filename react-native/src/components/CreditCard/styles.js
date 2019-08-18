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
    flex: 1,
    flexDirection: 'row'
  },
  rightBlock: {
    flex: 1,
    flexDirection: 'column'
  },
  cardNameContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  balanceContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  cardNameText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10
  },
  endingWithText: {
    color: '$darkGray',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 10
  },
  balanceText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  }
});