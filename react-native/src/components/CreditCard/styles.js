import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 80,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  leftBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBlock: {
    flex: 3,
    flexDirection: 'column',
  },
  // containers in leftBlock
  iconContainer: {
    flex: 1,
    height: 64
  },
  // containers in rightBlock
  topBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  bottomBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  cardNameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 5,
  },
  endingWithText: {
    color: '$darkGray',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 10
  },
  balanceText: {
    color: '$plaidBlue',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 5,
  }
});