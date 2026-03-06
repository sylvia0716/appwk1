import { Text, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>111319001 鍾佳穎</Text>
      <Text>我開成功了！</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});