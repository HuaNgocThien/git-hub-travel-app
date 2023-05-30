import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  back: {
    width: 36,
    height: 36,
  },
  header: {
    position: 'absolute',
    top: 40,
    backgroundColor: 'white',
    borderRadius: 15,
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    width: width - 48,
    margin: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
});

export default styles;
