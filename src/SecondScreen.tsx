import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function SecondScreen({}): JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.sectionTitle}>Second Screen</Text>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>GO BACK</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default SecondScreen;
