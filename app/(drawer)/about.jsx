import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyBG from '../../components/MyBG'

export default function about() {
  return (
    <MyBG>
      <View style={styles.screen}>
        <Text style={styles.header}>
          אפליקציית שעון נוכחות
        </Text>
        <Text style={styles.txt}>
          במערכת זו ניתן להחתים כניסה ויציאה {"\n"}וכן לראות את הסטוריית ההחתמות {"\n"}בנוסף ניתן לשלוט בפרטי המשתמש
        </Text>
        <View style={styles.footer}>
          <Text>
            נבנה על ידי ציון עמר
          </Text>
          <Text style={{color:"rgb(28, 106, 184)"}} onPress={() => Linking.openURL('https://github.com/ZionAmar/ZionAmar-workclock-expo-app')}>קישור לגיטהב</Text>
        </View>
      </View>
    </MyBG>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"space-around",
    alignItems:"center"
  },
  header:{
    fontSize:30,
    fontWeight:"bold"
  },
  txt:{
    fontSize:20,
    textAlign:"center"
  },
  footer:{
    alignItems:"center"
  }
})