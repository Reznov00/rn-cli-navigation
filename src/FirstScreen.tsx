import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/core';

function FirstScreen(): JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.sectionTitle}>First Screen</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('SecondScreen');
          }}>
          <Text>GO TO SECOND SCREEN</Text>
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

export default FirstScreen;
