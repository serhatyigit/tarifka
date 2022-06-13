import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import styles from './MealDetailCard.styles';

const MealDetailCard = ({meal}) => {
  const {
    strMeal: mealName,
    strArea: mealArea,
    strMealThumb: MealImgUrl,
    strInstructions: mealInst,
    strYoutube: mealYoutubeLink,
  } = meal[0];

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: MealImgUrl}} />
      <View style={styles.header_container}>
        <Text style={styles.title}>{mealName}</Text>
        <Text style={styles.area}>{mealArea}</Text>
      </View>
      <View style={styles.seperator} />
      <Text style={styles.instructions}>{mealInst}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(mealYoutubeLink)}>
        <View style={styles.ytButton}>
          <Text style={styles.ytText}>Watch On Youtube</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MealDetailCard;
